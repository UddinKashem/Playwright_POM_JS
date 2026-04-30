class brokenImagePage{

    constructor(page) {
        this.page = page;
        this.hd_BrokenImages = page.getByRole('heading', { name: 'Broken Images'});
        this.img_BrokenImages = page.getByRole('img');
        
    }
    
}
export default brokenImagePage;