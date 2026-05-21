import { expect, page } from '@playwright/test';

class InputsPage {

    constructor(page) {
        this.page = page;
        this.hd_Inputs = page.getByRole('heading', { name: 'Inputs' });
        this.txt_Number = page.getByText('Number');
        this.txtBox_Input = page.getByRole('spinbutton');

    }

    async validateInputsPage() {
        await expect(this.hd_Inputs).toBeVisible({ timeout: 15000 });
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/inputs');
        await expect(this.txt_Number).toBeInViewport();
        await expect(this.txtBox_Input).toBeEditable();
    }

    async validateInputFields() {
        const input = this.txtBox_Input;

        // Enter a value
        await input.fill('1234567890');

        // 1. Direct value validation (Recommended)
        await expect(input).toHaveValue(/[0-9]/);

        // 2. Validate using a Regular Expression
        await expect(input).not.toHaveValue(/[a-z_]+/);
    }
}
export default InputsPage;

/*
test('test', async ({ page }) => {
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1234');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('spinbutton').fill('');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').press('Enter');
});
*/