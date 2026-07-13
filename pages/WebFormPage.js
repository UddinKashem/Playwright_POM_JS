import { expect, page } from '@playwright/test';

class WebFormPage {

    constructor(page) {
        this.page = page;
        this.hdPracticeForm = page.getByRole('heading', { name: 'Practice Form' });
        this.hdStudentForm = page.getByRole('heading', { name: 'Student Registration Form' });
        this.txtName = page.getByText('Name');
        this.txtBoxFName = page.getByRole('textbox', { name: 'First Name' });
        this.txtBoxLName = page.getByRole('textbox', { name: 'Last Name' });
        this.txtEmail = page.getByText('Email');
        this.txtBoxEmail = page.getByRole('textbox', { name: 'name@example.com' });
        this.txtGender = page.getByText('Gender');
        this.radioMale = page.getByRole('radio', { name: 'Male', exact: true });
        this.txtMale = page.getByText('Male', { exact: true });
        this.radioFemale = page.getByRole('radio', { name: 'Female', exact: true });
        this.txtFemale = page.getByText('Female', { exact: true });
        this.radioOther = page.locator('div').filter({ hasText: /^Other$/ });
        this.txtOther = page.getByText('Other', { exact: true });
        this.txtMobile = page.getByText('Mobile(10 Digits)');
        this.txtBoxMobile = page.getByRole('textbox', { name: 'Mobile Number' });
        this.txtDOB = page.getByText('Date of Birth');
        this.inputDOB = page.locator('#dateOfBirthInput');
        this.txtSubject = page.getByText('Subjects');
        this.txtInputSubjects = page.locator('.subjects-auto-complete__input-container');
        this.txtHobbies = page.getByText('Hobbies');
        this.ckBoxSports = page.getByRole('checkbox', { name: 'Sports' });
        this.txtSports = page.getByText('Sports');
        this.ckBoxReading = page.getByRole('checkbox', { name: 'Reading' });
        this.txtReading = page.getByText('Reading');
        this.ckBoxMusic = page.getByRole('checkbox', { name: 'Music' });
        this.txtMusic = page.getByText('Music');
        this.txtPicture = page.getByText('Picture');
        this.btnChooseFile = page.getByRole('button', { name: 'Choose File' });
        this.txtCurrentAddress = page.getByText('Current Address');
        this.inputCurrentAddress = page.getByRole('textbox', { name: 'Current Address' });
        this.txtStateNCity = page.getByText('State and City');
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });

    }

    async navToWebFormPage() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
        await this.page.waitForURL('https://demoqa.com/automation-practice-form');
    }
    async validateWebFormPage() {
        await expect(this.page).toHaveURL('https://demoqa.com/automation-practice-form');
        await expect(this.hdPracticeForm).toBeInViewport();
        await expect(this.hdStudentForm).toBeAttached();
        await expect(this.txtName).toBeVisible();
        await expect(this.txtBoxFName).toBeEditable();
        await expect(this.txtBoxLName).toBeEditable();
        await expect(this.txtEmail).toBeInViewport();
        await expect(this.txtBoxEmail).toBeEditable();
        await expect(this.txtGender).toBeVisible();
        await expect(this.radioMale).not.toBeChecked();
        await expect(this.txtMale).toBeInViewport();
        await expect(this.radioFemale).not.toBeChecked();
        await expect(this.txtFemale).toBeVisible();
        await expect(this.radioOther).not.toHaveClass(/checked/);
        await expect(this.txtOther).toBeVisible();
        await expect(this.txtMobile).toBeAttached();
        await expect(this.txtBoxMobile).toBeEditable();
        await expect(this.txtDOB).toBeInViewport();
        await expect(this.inputDOB).toBeEditable();
        await expect(this.txtSubject).toBeVisible();
        await expect(this.inputDOB).toBeEditable();
        await expect(this.txtSubject).toBeInViewport();
        await expect(this.txtInputSubjects).toBeAttached();
        await expect(this.txtHobbies).toBeVisible();
        await expect(this.ckBoxSports).not.toBeChecked();
        await expect(this.txtSports).toBeInViewport();
        await expect(this.ckBoxReading).not.toBeChecked();
        await expect(this.txtReading).toBeVisible();
        await expect(this.ckBoxMusic).not.toBeChecked();
        await expect(this.txtMusic).toBeVisible();
        await expect(this.txtPicture).toBeVisible();
        await expect(this.btnChooseFile).toBeEnabled();
        await expect(this.txtCurrentAddress).toBeVisible();
        await expect(this.inputCurrentAddress).toBeEditable();
        await expect(this.txtStateNCity).toBeVisible();
        await expect(this.btnSubmit).toBeEnabled();
    }

    async validateWebDropdownList() {
        await expect(this.page).toHaveURL('https://demoqa.com/automation-practice-form');
        await expect(this.hdPracticeForm).toBeInViewport();
        const dropdownState = await this.page.locator('#state > .css-13cymwt-control > .css-hlgwow > .css-19bb58m');
        await expect(dropdownState).toBeVisible();

        const allOptionsState = dropdownState.locator('option');
        await expect(allOptionsState).not.toHaveCount(4);

    }

}
export default WebFormPage;