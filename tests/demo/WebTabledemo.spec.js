import { test, expect } from '@playwright/test';
import WebTabledemo from '../../pages/WebTabledemo';
import { TIMEOUT } from 'node:dns';

test.describe("Web Table Validation", () => {

  let webTabledemo;

  test.beforeEach(async ({ page }) => {

    webTabledemo = new WebTabledemo(page);

    await webTabledemo.gotoWebTablePage();

  });

  test('Validate Web Table Page', async ({ page }) => {

    webTabledemo = new WebTabledemo(page);

    await webTabledemo.validateWebTables();

    await webTabledemo.clickColumnHeader('First Name');
    await webTabledemo.clickColumnHeader('Last Name');
    await webTabledemo.clickColumnHeader('Age');
    await webTabledemo.clickColumnHeader('Email');
    await webTabledemo.clickColumnHeader('Salary');
    await webTabledemo.clickColumnHeader('Department');
    await webTabledemo.clickColumnHeader('Action');

  });

  test('Validate Search Activity on WebTable', async ({ page }) => {

    webTabledemo = new WebTabledemo(page);

    await webTabledemo.validateWebTablesSearch();
    await webTabledemo.txt_Search.fill('Alden');
    await webTabledemo.txt_Search.press('Enter');
    await expect(webTabledemo.txt_Search).toHaveValue('Alden');
    await expect(page.getByRole('cell', { name: 'Alden', exact: true })).toBeEnabled();
    await webTabledemo.clickWBCell('Cantrell');
    await webTabledemo.clickWBCell('45');
    await webTabledemo.clickWBCell('alden@example.com');
    await webTabledemo.clickWBCell('12000');
    await webTabledemo.clickWBCell('Compliance');
    //await page.pause();

  });

  test('Validate Add Record and Delete Record', async ({ page }) => {

    webTabledemo = new WebTabledemo(page);

    await webTabledemo.validateAddRecordNRemove();


    await webTabledemo.txtInput('First Name', 'TestFirst');
    await webTabledemo.txtInput('Last Name', 'TestLast');
    await webTabledemo.txtInput('name@example.com', 'test@test.com');
    await webTabledemo.txtInput('Age', '41');
    await webTabledemo.txtInput('Salary', '12400');
    await webTabledemo.txtInput('Department', 'Finance');
    await webTabledemo.btnSubmit.click();

    await webTabledemo.txt_Search.fill('TestFirst');
    await webTabledemo.txt_Search.press('Enter');
    await expect(webTabledemo.txt_Search).toHaveValue('TestFirst');
    await expect(page.getByRole('cell', { name: 'TestFirst', exact: true })).toBeEnabled();
    await page.locator('#delete-record-4 > svg > path').click();
    await webTabledemo.txt_Search.fill('TestFirst');
    await webTabledemo.txt_Search.press('Enter');
    await expect(webTabledemo.txt_Search).toHaveValue('TestFirst');
    await expect(page.getByRole('cell', { name: 'TestFirst' })).not.toBeAttached();
    //    await page.pause();
  });


});