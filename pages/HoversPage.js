import { expect, page } from '@playwright/test';

class HoversPage {

    constructor(page) {
        this.page = page;
        this.hd_Hovers = page.getByRole('heading', { name: 'Hovers' });
        this.txt_HoverOver = page.getByText('Hover over the image for');
        this.img_UserAvatar = page.getByRole('img', { name: 'User Avatar' });
        this.lnk_ViewProfile = page.getByRole('link', { name: 'View profile' });
        this.hd_User1 = page.getByRole('heading', { name: 'name: user1' });
        this.hd_User2 = page.getByRole('heading', { name: 'name: user2' });
        this.hd_User3 = page.getByRole('heading', { name: 'name: user3' });
        this.hd_NotFound = page.getByRole('heading', { name: 'Not Found' });

    }

    async validateHoversPage() {
        await expect(this.hd_Hovers).toBeVisible();
        await expect(this.txt_HoverOver).toBeInViewport();
        await expect(this.img_UserAvatar.first()).toBeVisible();
        await expect(this.img_UserAvatar.nth(1)).toBeEnabled();
        await expect(this.img_UserAvatar.nth(2)).toBeInViewport();

    }

    async validateHoversUser1() {
        await expect(this.hd_Hovers).toBeVisible();
        await expect(this.img_UserAvatar.first()).toBeVisible();
        await this.img_UserAvatar.first().hover({ timeout: 15000 });
        await expect(this.hd_User1).toBeVisible();
        await expect(this.lnk_ViewProfile).toBeVisible();
        await this.lnk_ViewProfile.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/users/1');
        await expect(this.hd_NotFound).toBeInViewport();

    }

    async validateHoversUser2() {
        await expect(this.hd_Hovers).toBeVisible();
        await expect(this.img_UserAvatar.nth(1)).toBeVisible();
        await this.img_UserAvatar.nth(1).hover({ timeout: 15000 });
        await expect(this.hd_User2).toBeVisible();
        await expect(this.lnk_ViewProfile).toBeVisible();
        await this.lnk_ViewProfile.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/users/2');
        await expect(this.hd_NotFound).toBeInViewport();

    }

    async validateHoversUser3() {
        await expect(this.hd_Hovers).toBeVisible();
        await expect(this.img_UserAvatar.nth(2)).toBeVisible();
        await this.img_UserAvatar.nth(2).hover({ timeout: 15000 });
        await expect(this.hd_User3).toBeVisible();
        await expect(this.lnk_ViewProfile).toBeVisible();
        await this.lnk_ViewProfile.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/users/3');
        await expect(this.hd_NotFound).toBeInViewport();
        await expect(this.hd_NotFound).toHaveText(/Not Found/);

    }
}
export default HoversPage;