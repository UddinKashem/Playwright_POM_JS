import { test, expect } from '@playwright/test';
import ModalDialogsPage from '../../pages/ModalDialogsPage';

test.describe('Valdate Modal Dialogs Page', () => {

    let modalDialogsPage;

    test.beforeEach(async ({ page }) => {
        modalDialogsPage = new ModalDialogsPage(page);

        await modalDialogsPage.navToModalDials();
    });

    test('Modal Dialogs Page', async ({ page }) => {

        modalDialogsPage = new ModalDialogsPage(page);

        await modalDialogsPage.validateModalDialogsPage();
    });

    test('Validate Small Dialogs', async ({ page }) => {
        modalDialogsPage = new ModalDialogsPage(page);

        await modalDialogsPage.validateSmallModal();

    });

    test('Validate Large Dialogs', async ({ page }) => {
        modalDialogsPage = new ModalDialogsPage(page);

        await modalDialogsPage.validateLargeModal();

    });
});