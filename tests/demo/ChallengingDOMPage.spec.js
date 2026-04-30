import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home';
import Challenging_DOMPage from '../../pages/ChallengingDOMPage';

test('Validate Challenging DOM', async ({ page }) => {
    const homePage = new HomePage(page);
    const challengingDOMPage = new Challenging_DOMPage(page);

    await homePage.gotoHomePage();
    await page.waitForURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(homePage.lnk_Challenging_DOM).toBeEnabled();
    await homePage.lnk_Challenging_DOM.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
    await expect(challengingDOMPage.hd_ChallengingDOM).toBeInViewport();
    await expect(challengingDOMPage.txt_part).toBeInViewport();
    await expect(page).toHaveTitle(/The Internet/);
    // await expect(challengingDOMPage.lnk_qux).toBeEnabled();
    // await expect(challengingDOMPage.lnk_bar).toBeEnabled();
    await expect(challengingDOMPage.colH_Lorem).toBeVisible();
    await expect(challengingDOMPage.colH_Ipsum).toBeVisible();
    await expect(challengingDOMPage.colH_Dolor).toBeVisible();
    await expect(challengingDOMPage.colH_Sit).toBeVisible();
    await expect(challengingDOMPage.colH_Amet).toBeVisible();
    await expect(challengingDOMPage.colH_Diceret).toBeVisible();
    await expect(challengingDOMPage.colH_Action).toBeVisible();
    await expect(challengingDOMPage.cell_Iuvaret0).toBeVisible();
    await expect(challengingDOMPage.cell_Iuvaret0).toHaveCount[1];

    await expect(challengingDOMPage.lnk_Edit.first()).toBeEnabled();
    challengingDOMPage.navToEditURL();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#edit');

    await expect(challengingDOMPage.lnk_Delete.first()).toBeEnabled();
    challengingDOMPage.navToDeleteURL();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#delete');

    //await page.pause();
});