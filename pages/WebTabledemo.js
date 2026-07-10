import { expect, page } from '@playwright/test';

class WebTabledemo{

    constructor(page){
        this.page = page;
        this.txt_Search = page.getByRole('textbox', { name: 'Type to search' });
        this.hd_WebTable = page.getByRole('heading', { name: 'Web Tables' });
        this.colHdFName = page.getByRole('columnheader', { name: 'First Name' });
        this.colHdLName = page.getByRole('columnheader', { name: 'Last Name' });
        this.colHdAge = page.getByRole('columnheader', { name: 'Age' });
        this.colHdEmail = page.getByRole('columnheader', { name: 'Email' });
        this.colHdSalary = page.getByRole('columnheader', { name: 'Salary' });
        this.colHdDepartment = page.getByRole('columnheader', { name: 'Department' });
        this.colHdAction = page.getByRole('columnheader', { name: 'Action' });
        this.btnAdd =  page.getByRole('button', { name: 'Add' });
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
        this.txtRegForm = page.getByText('Registration Form');
        this.lblfName = page.locator('#firstName-label');
    }

      // Method that accepts a parameter for the locator
  async clickColumnHeader(columnName) {
    await this.page.getByRole('columnheader', { name: columnName }).click();
    //return this.page.locator(`text=${columnName}`); 
  }

async clickWBCell(CellName) {
    await this.page.getByRole('cell', { name: CellName }).click();
    //return this.page.locator(`text=${columnName}`); 
  }

 async txtInput(txtInputName, txtInputData) {
    await this.page.getByRole('textbox', { name: txtInputName }).fill(txtInputData);
  }

    async gotoWebTablePage() {
    // Adding waitUntil: 'domcontentloaded' can sometimes stabilize flaky environments//, { waitUntil: 'domcontentloaded' }
    await this.page.goto("https://demoqa.com/webtables");
    await this.page.waitForURL("https://demoqa.com/webtables");
  }


    async validateWebTables() {

        await expect(this.page).toHaveURL('https://demoqa.com/webtables');
        await expect(this.hd_WebTable).toBeVisible();
        await expect(this.txt_Search).toBeInViewport();
        // await this.page.pause();
        await expect(this.colHdFName).toBeVisible();
        await expect(this.colHdLName).toBeVisible();
        await expect(this.colHdAge).toBeVisible();
        await expect(this.colHdEmail).toBeVisible();
        await expect(this.colHdSalary).toBeVisible();
        await expect(this.colHdDepartment).toBeVisible();
        await expect(this.colHdAction).toBeVisible();

    }

    async validateWebTablesSearch() {

        await expect(this.page).toHaveURL('https://demoqa.com/webtables');
        await expect(this.hd_WebTable).toBeVisible();
        await expect(this.txt_Search).toBeInViewport();
    }

    async validateAddRecordNRemove(){
        await expect(this.page).toHaveURL('https://demoqa.com/webtables');
        await expect(this.btnAdd).toBeEnabled();
        await this.btnAdd.click();
        await this.btnSubmit.waitFor({state: 'visible'});
        await expect(this.txtRegForm).toBeVisible({timeout: 5000});
        await expect(this.lblfName).toBeVisible();
    }

    /*
    await page.locator('#firstName-label').click();
  await page.locator('#lastName-label').click();
  await page.locator('#userEmail-label').click();
  await page.locator('#age-label').click();
  await page.locator('#salary-label').click();
  await page.locator('#department-label').click();
    */
}
export default WebTabledemo;