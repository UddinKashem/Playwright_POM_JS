import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import GeolocationPage from '../../pages/GeolocationPage';

test.describe('Geolocation Page Validation', () => {

    let homePage;
    let geolocationPage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navGeolocationPage();

    });

    test('Validate Geolocation Page', async({page}) => {
        geolocationPage = new GeolocationPage(page);

        await geolocationPage.validateGeolocation();
        //await geolocationPage.page.pause();

    });

});