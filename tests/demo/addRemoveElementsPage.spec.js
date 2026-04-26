import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home'; // Example
import AddRemoveElementsPage from '../../pages/AddRemoveElementsPage';

test('Validate Add Remove Elements Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

    await homePage.gotoHomePage();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(homePage.lnk_Add_Remove_Elements).toBeEnabled();
    await homePage.lnk_Add_Remove_Elements.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.getByText('Add/Remove Elements')).toBeVisible();
    await expect(addRemoveElementsPage.btn_AddElement).toBeEnabled();
    await addRemoveElementsPage.btn_AddElement.click();
    await expect(addRemoveElementsPage.btn_Delete).toBeEnabled();
    await addRemoveElementsPage.btn_Delete.click();
    await expect(addRemoveElementsPage.btn_Delete).toBeHidden();

});

