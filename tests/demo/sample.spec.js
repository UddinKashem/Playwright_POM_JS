import {test, expect} from '@playwright/test'


test.only('Test the sample test', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");
   
    //await expect(page.getByText("Welcome to the-internet"));
    //await expect(page.toHaveTitle("Welcome to the-internet"));
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();

    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await expect(page.getByRole('heading', { name: 'A/B Test Variation 1' })).toBeVisible();

    //Available Examples
    await page.pause();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.pause();
});