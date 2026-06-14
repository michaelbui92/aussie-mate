import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for Aussie-Mate smoke tests.
 *
 * Browser setup:
 *   npx playwright install chromium
 *
 * The browsers are NOT installed by default (each is ~150MB, and the
 * build server's /opt/data mount has limited space). Run the install
 * command above once before `npm test`. CI installs both chromium
 * and firefox.
 *
 * Tests live in tests/e2e/*.spec.ts.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",

  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  // Boot the Next.js dev server before tests (if not already running on
  // PLAYWRIGHT_BASE_URL). The webServer block is skipped if the URL is
  // reachable, so this works for both local dev and CI.
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
