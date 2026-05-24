import { page, expect } from '@playwright/test';

class NotificationMessagePage {
    constructor(page) {
        this.page = page;
        this.loc_Action = page.locator('//*[@id="flash"]');
        this.hd_NotificationMessage = page.getByRole('heading', { name: 'Notification Message' });
        this.txt_The_Above = page.getByText(/The message displayed above/);
        this.lnk_ClickHere = page.getByRole('link', { name: 'Click here' });
        this.img_GItHub = page.getByRole('img', { name: 'Fork me on GitHub' });
    }

    async validateNotificationMessage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/notification_message_rendered');
        await expect(this.loc_Action).toHaveText(/Action successful|Action unsuccesful, please try again/)
        await expect(this.hd_NotificationMessage).toBeVisible();
        await expect(this.txt_The_Above).toHaveText(/The message displayed above/);
        await expect(this.lnk_ClickHere).toBeEnabled();
        await expect(this.img_GItHub).toBeAttached();
    }
}
export default NotificationMessagePage;