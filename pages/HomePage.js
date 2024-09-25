export class HomePage {
    constructor(page) {
        this.page = page;
        this.url = process.env.BASE_URL;  // Store BASE_URL in the constructor
        this.searchInput = page.locator('input[name="search"]');
        //this.searchButton = page.locator('//html/body/header/div/div/div[2]/div/button');
        this.searchButton = page.locator('//button[@data-lang=\'en-gb\' and contains(@class, \'btn-lg\')]');
    }

    async navigate() {
        if (!this.url) {
            throw new Error('BASE_URL is not defined');  // Error handling if URL is not set
        }
        await this.page.goto(this.url);  // Use the stored URL from the constructor
    }

    async search(term) {
        await this.searchInput.fill(term);
        await this.searchButton.click();
    }
}
