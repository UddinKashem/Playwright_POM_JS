import { test, expect } from '@playwright/test';
import { playwright_dev_pages } from '../../pages/playwright_dev_pages';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new playwright_dev_pages(page)
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    //`Write tests using web first assertions, page fixtures and locators`,
    `Write tests using web-first assertions, fixtures and locators`,
    //`Run single test, multiple tests, headed mode`,
    `Run single or multiple tests; headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`,
    `View a trace of your tests`
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new playwright_dev_pages(page)
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});