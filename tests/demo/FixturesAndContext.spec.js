const { test, expect } = require('@playwright/test');

test('Fixture and Context Demo', async({browser}) => {
 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com');
    await page.pause();
})

test('Fixture and Context Demo page fixture', async({page}) => {
 
    await page.goto('https://google.com');
    await page.pause();
})