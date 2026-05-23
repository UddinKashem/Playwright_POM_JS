import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import KeyPressesPage from '../../pages/KeyPressesPage';


test.describe('Key Presses Page Validation', () => {

    let homePage;
    let keyPressesPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToKeyPressesPage();
    });

    test('Validate Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateKeyPresses();

    });

    test('Validate Tab Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateTabKey();
    });

    test('Validate ENTER Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateENTERKey();
    });


    test('Validate SHIFT Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateSHIFTKey();
    });

    test('Validate CONTROL Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateCONTROLKey();
    });

    test('Validate ALT Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateALTKey();
    });

    test('Validate UP Arrow Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateUPArrowKey();
    });

    test('Validate DOWN Arrow Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateDOWNArrowKey();
    });

    test('Validate RIGHT Arrow Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateRIGHTArrowKey();
    });

    test('Validate LEFT Arrow Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateLEFTArrowKey();
    });

    test.skip('Validate WINDOW Arrow Key Presses', async ({ page }) => {
        keyPressesPage = new KeyPressesPage(page);

        await keyPressesPage.ValidateWINDOWKey();
        await keyPressesPage.page.pause();
    });
});