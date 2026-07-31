import { test, expect } from "@playwright/test";

test("Playwright website loads successfully", async ({ page }) => {
  await page.goto("https://playwright.dev");

  await expect(page).toHaveTitle(/Playwright/);
});