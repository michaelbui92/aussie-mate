import { test, expect } from "@playwright/test";

/**
 * Expanded smoke tests for aussie-mate.
 * Covers: navigation, bilingual support, dark mode, 404, dynamic routes, mobile.
 */

test.describe("Home page", () => {
  test("renders with the expected structure", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Aussie/i);
    await expect(page.locator("nav")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    // Hero section should exist
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // CTA buttons should be present
    await expect(page.getByText("Explore Destinations").first()).toBeVisible();
  });
});

test.describe("Search modal", () => {
  test("opens when the Search button is clicked and accepts input", async ({ page }) => {
    await page.goto("/");
    const searchBtn = page.getByRole("button", { name: "Search" }).first();
    await searchBtn.click();
    const input = page.getByPlaceholder(/search/i).first();
    await expect(input).toBeVisible();
    await input.fill("비자");
    await page.waitForTimeout(300);
    const results = page.getByRole("link");
    await expect(results.first()).toBeVisible();
  });

  test("closes via Escape key", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Search" }).first().click();
    await expect(page.getByPlaceholder(/search/i).first()).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByPlaceholder(/search/i).first()).not.toBeVisible();
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
    "/transport",
    "/finance",
    "/weather",
    "/visa",
    "/beyond-sydney",
    "/sport",
    "/other-tools",
    "/privacy",
    "/terms",
  ]) {
    test(`${path} loads without errors`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("nav")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test.describe("Dynamic routes", () => {
  test("destination page loads", async ({ page }) => {
    const response = await page.goto("/destinations/blue-mountains");
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("nav")).toBeVisible();
  });

  test("visa page loads", async ({ page }) => {
    const response = await page.goto("/visa/417");
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("nav")).toBeVisible();
  });
});

test.describe("404 handling", () => {
  test("returns 404 for unknown paths", async ({ page }) => {
    const response = await page.goto("/this-path-does-not-exist");
    expect(response?.status()).toBe(404);
  });
});

test.describe("Bilingual support", () => {
  test("language toggle is present in nav", async ({ page }) => {
    await page.goto("/");
    const langToggle = page
      .getByRole("button")
      .filter({ hasText: /한국|english|ko|en/i })
      .first();
    await expect(langToggle).toBeVisible();
  });

  test("toggling language changes visible content", async ({ page }) => {
    await page.goto("/");
    // Find the language toggle
    const langToggle = page
      .getByRole("button")
      .filter({ hasText: /한국어|EN/i })
      .first();
    await langToggle.click();
    // After toggling, Korean text should be visible somewhere
    await expect(page.getByText(/호주|시드니|한국어/i).first()).toBeVisible();
  });
});

test.describe("Dark mode", () => {
  test("theme toggle is present in nav", async ({ page }) => {
    await page.goto("/");
    const themeToggle = page
      .getByRole("button", { name: /switch to (dark|light) mode/i })
      .first();
    await expect(themeToggle).toBeVisible();
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("hamburger menu opens and shows nav items", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /open menu/i });
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    // Mobile menu should show group labels
    await expect(page.getByText("Living").first()).toBeVisible();
    await expect(page.getByText("Destinations").first()).toBeVisible();
  });

  test("hamburger label updates when open", async ({ page }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /open menu/i });
    await hamburger.click();
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible();
  });
});

test.describe("SEO metadata", () => {
  test("has JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const ldJson = page.locator('script[type="application/ld+json"]');
    const count = await ldJson.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("has canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /youraussieguides\.com/);
  });
});

test.describe("Aussie English page", () => {
  test("shows the phrase list with at least 100 phrases", async ({ page }) => {
    await page.goto("/aussie-english");
    const phrases = await page.locator('button[aria-expanded]').count();
    expect(phrases, "Should have at least 100 phrases").toBeGreaterThanOrEqual(100);
  });
});