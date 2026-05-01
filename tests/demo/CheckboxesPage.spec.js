import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home';
import CheckboxesPage from '../../pages/CheckboxesPages';


test('Validate Checkboxes page', async ({ page }) => {
    const homePage = new HomePage(page);
    const checkBoxesPage = new CheckboxesPage(page);

    await homePage.gotoHomePage();
    await page.waitForURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(homePage.lnk_Checkboxes).toBeEnabled();
    await homePage.lnk_Checkboxes.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
    await expect(checkBoxesPage.h_Checkboxes).toBeInViewport();
    await expect(checkBoxesPage.chk_checkbox.first()).toBeEnabled();
    await checkBoxesPage.chk_checkbox.first().check();
    await expect(checkBoxesPage.chk_checkbox.first()).toBeChecked();
    await checkBoxesPage.navToCheckboxes(0);
    await expect(checkBoxesPage.chk_checkbox.first()).toBeInViewport();
    await expect(checkBoxesPage.chk_checkbox.first()).not.toBeChecked();
    await expect(checkBoxesPage.chk_checkbox.nth(1)).toBeChecked();
    await checkBoxesPage.navToCheckboxes(1);
    await expect(checkBoxesPage.chk_checkbox.nth(1)).not.toBeChecked();

    //await page.pause();

})