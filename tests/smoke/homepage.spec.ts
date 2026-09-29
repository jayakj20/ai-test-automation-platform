import { test, expect } from "@playwright/test";

test.describe('Playwright homepage', () => {

  test('displays key homepage content and navigation', async ({ page }) => {
    await test.step('Open the homepage', async () => {
      await page.goto('/');
    });

    await test.step('Verify the page identity', async () => {
      await expect(page).toHaveTitle(/Playwright/);

      await expect(
        page.getByRole('heading', {
          name: /Playwright enables reliable web automation/i,
        }),

      ).toBeVisible();
    });
    await test.step('Verify primary navigation', async () => {
      await expect(
        page.getByRole('link', { name: 'Docs', exact: true }),
      ).toBeVisible();

      await expect(
        page.getByRole('link', { name: 'API', exact: true }),
      ).toBeVisible();
    });
  });

test('opens the documentation from the homepage', async ({ page }) => {
  
  await test.step('Open the homepage', async() => {
  await page.goto('/');
})
  await test.step('Open the documentation', async() =>{
  await page.getByRole('link', { name: 'Docs', exact: true }).click();
})
await test.step('Verify the documentation URL', async() => {  
await expect(page).toHaveURL(/\/docs\/intro/);
await expect(page.getByRole('heading', {name: 'Installation', exact:true})).toBeVisible
})
});

});