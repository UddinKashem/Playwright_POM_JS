import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import RedirectLinkPage from '../../pages/RedirectLinkPage';

test.describe('Redirect Link Page Validation', () => {
    let homePage;
    let redirectLinkPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navRedirectLinkPage();
    });

    test('Validate Redirect Link Page', async ({ page }) => {
        redirectLinkPage = new RedirectLinkPage(page);

        await redirectLinkPage.validateRedirectLink();
    });

    test('Validate HTTP Status Code 200 Link Page', async ({ page }) => {
        redirectLinkPage = new RedirectLinkPage(page);

        await redirectLinkPage.validate_StatusCode200();
    });

    test('Validate HTTP Status Code 301 Link Page', async ({ page }) => {
        redirectLinkPage = new RedirectLinkPage(page);

        await redirectLinkPage.validate_StatusCode301();
    });

    test('Validate HTTP Status Code 404 Link Page', async ({ page }) => {
        redirectLinkPage = new RedirectLinkPage(page);

        await redirectLinkPage.validate_StatusCode404();
      });

    test('Validate HTTP Status Code 500 Link Page', async ({ page }) => {
        redirectLinkPage = new RedirectLinkPage(page);

        await redirectLinkPage.validate_StatusCode500();
        //await redirectLinkPage.page.pause();
    });
});