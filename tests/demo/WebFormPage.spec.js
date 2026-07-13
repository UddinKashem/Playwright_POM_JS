import { test, expect } from '@playwright/test';
import WebFormPage from '../../pages/WebFormPage';

test.describe('Web Form Page Validation', () => {

    let webFormPage;

    test.beforeEach(async ({ page }) => {

        webFormPage = new WebFormPage(page);

        await webFormPage.navToWebFormPage();

    });

    test('Validate Web Form page', async ({ page }) => {

        webFormPage = new WebFormPage(page);

        await webFormPage.validateWebFormPage();
    });

    test.only('Validate Web Form Dropdown List', async ({ page }) => {

        webFormPage = new WebFormPage(page);

        await webFormPage.validateWebDropdownList();
        //await page.pause();
    });

});