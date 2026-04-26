import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home';
import BasicAuthPage  from '../../pages/basicAuthPage';

import AddRemoveElementsPage from '../../pages/AddRemoveElementsPage';

test('validate basic auth page', async ({ page }) => {

    const homePage = new HomePage(page);
    const basicAuthPage = new BasicAuthPage(page);

    homePage.gotoHomePage();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(homePage.lnk_Basic_Auth).toBeEnabled();
    await homePage.lnk_Basic_Auth.click();

    await page.pause();

})
