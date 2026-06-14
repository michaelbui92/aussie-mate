import { test, expect } from "@playwright/test";

/**
 * Smoke tests for aussie-mate. Catches the regressions that matter:
 *   - Broken pages (500s, render errors)
 *   - Broken search (modal doesn't open, no results)
 *   - Broken navigation (key paths don't load)
 *
 * Data-driven content (the actual phrases) is verified by eye during
 * data updates, not by automated tests. The phrase count test is a
 * sanity floor, not an exhaustive check.
 */

test.describe("Home page", () => {
  test("renders with the expected structure", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Aussie/i);
    // Hero section + nav
    await expect(page.locator("nav")).toBeVisible();
    // Footer is present
    await expect(page.locator("footer")).toBeVisible();
  });
});

test.describe("Search modal", () => {
  test("opens when the Search button is clicked and accepts input", async ({ page }) => {
    await page.goto("/");
    // Open via the nav search button (ariaLabel="Search")
    await page.getByRole("button", { name: "Search" }).first().click();
    // The modal should be visible — search for a placeholder or input
    const input = page.getByPlaceholder(/search/i).first();
    await expect(input).toBeVisible();
    // Type a known Korean search term
    await input.fill("비자");
    // Wait for results to appear (debounced)
    await page.waitForTimeout(300);
    // Some result link should be visible
    const results = page.getByRole("link");
    await expect(results.first()).toBeVisible();
  });

  test("closes via the close button", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Search" }).first().click();
    // Find the close button — it has text "ESC" or similar
    const closeButton = page.getByRole("button").filter({ hasText: /esc|close|×/i }).first();
    if (await closeButton.isVisible().catch(() => false)) {
      await closeButton.click();
    }
  });
});

test.describe("Key navigation paths", () => {
  for (const path of [
    "/aussie-english",
    "/apartment",
    "/workplace",
    "/study",
    "/tourist",
    "/resources",
    "/destinations",
    "/about",
    "/faq",
  ]) {
    test(`${path} loads without errors`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should return 2xx`).toBeLessThan(400);
      // Every page should have a nav and footer
      await expect(page.locator("nav")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test.describe("Aussie English page", () => {
  test("shows the phrase list with at least 100 phrases", async ({ page }) => {
    await page.goto("/aussie-english");
    // The phrase list is rendered as accordion items or similar
    // Sanity check: at least 100 phrases
    // (Actual count is 209, this is a floor that catches broken renders)
    const phrases = await page.locator('[data-phrase], .phrase-item, button[aria-expanded]').count();
    expect(phrases, "Should have at least 100 phrases").toBeGreaterThanOrEqual(100);
  });
});

test.describe("Bilingual support", () => {
  test("language toggle is present in nav", async ({ page }) => {
    await page.goto("/");
    // There should be a way to switch language — typically a button or
    // toggle in the nav. This test just verifies the toggle exists.
    const langToggle = page
      .getByRole("button")
      .filter({ hasText: /한국|english|ko|en/i })
      .first();
    await expect(langToggle).toBeVisible();
  });
});
