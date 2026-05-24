import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage'
import LargeNDeepDOM from '../../pages/LargeNDeepDOM';

test.describe('Large N Deep DOM Page Validation', () => {

    let homePage;
    let largeNDeepDOM;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToLargeNDeepDOM();
    });

    test('Validate Large and Deep DOM Page', async ({ page }) => {
        largeNDeepDOM = new LargeNDeepDOM(page);

        await largeNDeepDOM.ValidateLargeNDeepDOMPage();
        //await largeNDeepDOM.page.pause();
    });

    test('Validate Large DOM Table', async ({ page }) => {
        largeNDeepDOM = new LargeNDeepDOM(page);

        await largeNDeepDOM.validateDOMTable();
       // await largeNDeepDOM.page.pause();
    });
});