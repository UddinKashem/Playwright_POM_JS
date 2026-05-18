import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import Challenging_DOMPage from '../../pages/ChallengingDOMPage';

test.describe('Challenging DOM Page Validation', () => {
    let homePage;
    let challengingDOMPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToChangengingDOMPage();

    });

    test('Validate Challenging DOM Page', async ({ page }) => {
        challengingDOMPage = new Challenging_DOMPage(page);

        await challengingDOMPage.validateChallengingDOM();

    });

    test('Validate Nav to Edit url', async ({ page }) => {
        challengingDOMPage = new Challenging_DOMPage(page);
        await challengingDOMPage.ValidateNavToEditURL();

    });

    test('Validate Nav to Delete URL', async ({ page }) => {
        challengingDOMPage = new Challenging_DOMPage(page);
        await challengingDOMPage.validateNavToDeleteURL();
    });
});