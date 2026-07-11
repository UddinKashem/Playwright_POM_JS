import { expect, page } from '@playwright/test';

class ModalDialogsPage {

    constructor(page) {
        this.page = page;
        this.hdDodalDials = page.getByRole('heading', { name: 'Modal Dialogs' });
        this.txtToSeeModal = page.getByText('Click on button to see modal');
        this.btnSmall = page.getByRole('button', { name: 'Small modal' });
        this.btnLage = page.getByRole('button', { name: 'Large modal' });
        this.txtSmallModal = page.getByText('Small Modal', { exact: true });
        this.txtSmMsg = page.getByText('This is a small modal. It has');
        this.btnClose = page.getByText('Close');
        this.txtLargeModal = page.getByText('Large Modal', { exact: true });
        this.txtLargeMsg = page.getByText('Lorem Ipsum is simply dummy');
    }

    async navToModalDials() {
        // Adding waitUntil: 'domcontentloaded' can sometimes stabilize flaky environments//, { waitUntil: 'domcontentloaded' }
        await this.page.goto("https://demoqa.com/modal-dialogs");
        await this.page.waitForURL("https://demoqa.com/modal-dialogs");
    }

    async validateModalDialogsPage() {
        await expect(this.page).toHaveURL('https://demoqa.com/modal-dialogs');
        await expect(this.hdDodalDials).toBeAttached();
        await expect(this.txtToSeeModal).toBeInViewport();
        await expect(this.btnSmall).toBeEnabled();
        await expect(this.btnLage).toBeVisible();
    }

    async validateSmallModal() {
        await expect(this.page).toHaveURL('https://demoqa.com/modal-dialogs');
        await expect(this.btnSmall).toBeEnabled();
        await this.btnSmall.click({ timeout: 5000 });
        await expect(this.txtSmallModal).toBeAttached();
        await expect(this.txtSmMsg).toBeVisible();
        await expect(this.btnClose).toBeEnabled();
        await this.btnClose.click({ timeout: 5000 });
        await expect(this.txtSmMsg).not.toBeVisible();

    }

    async validateLargeModal() {
        await expect(this.page).toHaveURL('https://demoqa.com/modal-dialogs');
        await expect(this.btnLage).toBeEnabled();
        await this.btnLage.click({ timeout: 5000 });
        await expect(this.txtLargeModal).toBeAttached();
        await expect(this.txtLargeMsg).toBeVisible();
        await expect(this.btnClose).toBeEnabled();
        await this.btnClose.click({ timeout: 5000 });
        await expect(this.txtLargeMsg).not.toBeVisible();
    }

}
export default ModalDialogsPage;