class brokenImagePage{

    constructor(page) {
        this.page = page;
        this.hd_BrokenImages = page.getByRole('heading', { name: 'Broken Images'});
        this.img_BrokenImages = page.getByRole('img');
        
    }
/*
    test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Broken Images' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(3).click();
});
*/
    
}
export default brokenImagePage;