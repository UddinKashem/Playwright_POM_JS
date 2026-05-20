import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import InfiniteScrollPage  from '../../pages/InfiniteScrollPage';


test.describe('Infinite Scroll Page Validation', () => {
    let homePage;
    let infiniteScrollPage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToInfiniteScrollPage();

    })

    test('Validate Infinite Scroll Page', async ({ page }) => {
        infiniteScrollPage = new InfiniteScrollPage(page);
        
        await infiniteScrollPage.validateInfiniteScrollPage();
           
        //await infiniteScrollPage.page.pause();
       })

})