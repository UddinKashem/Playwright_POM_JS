import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import NotificationMessagePage from '../../pages/NotificationMessagePage'


test.describe('Notification Message Page Validation', () => {
        let homePage;
        let notificationMessagePage;

    test.beforeEach( async({ page }) => {
        homePage = new HomePage(page);
        
        await homePage.gotoHomePage();
        await homePage.navToNotificationMessagePage();

    });  
     
    test('Validate Notification Message Page', async({page}) => {
        notificationMessagePage = new NotificationMessagePage(page);

        await notificationMessagePage.validateNotificationMessage();
       // await notificationMessagePage.page.pause();
    })
});