import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import HorizontalSiderPage from '../../pages/HorizontalSliderPage';


test.describe('Horizontal Slider Page Validation', () => {
    let homePage;  
    let horizontalSliderPage;  

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToHorizontalSliderPage();

    })

    test('Validate Horizontal SLider Page', async({page}) => {
        horizontalSliderPage = new HorizontalSiderPage(page);

        await horizontalSliderPage.validateHorizontalSlider();
        //await horizontalSliderPage.page.pause();
    })
})