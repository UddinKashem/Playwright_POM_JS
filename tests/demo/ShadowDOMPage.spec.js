import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import ShadowDOMPage from '../../pages/ShadowDOMPage';


test.describe('Shadow DOM Page Validation', () => {
    let homePage;
    let shadowDOMPage;

    test.beforeEach( async({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navShadowDOMPage();
    });

    test('Validate Shadow DOM Page', async({ page }) => {
        shadowDOMPage = new ShadowDOMPage(page);

        await shadowDOMPage.validateShadowDOM();
       // await shadowDOMPage.page.pause();
    });
});