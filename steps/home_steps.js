import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js'; // Ensure the path is correct

let homePage;

Given('I am on the OpenCart demo homepage', async function () {
    homePage = new HomePage(this.page); // 'this.page' is provided by Playwright in Cucumber World
    await homePage.navigate();
});

When('I search for {string}', { timeout: 60000 }, async function (product) {
    await homePage.search(product);  // Search for the product, allowing 60 seconds
});

Then('I should see the search results for {string}', { timeout: 60000 }, async function (product) {
    await this.page.waitForSelector('.product-thumb', { timeout: 60000 }); // Alternative selector for search results
    const resultsText = await this.page.locator('.product-thumb').first().textContent();
    expect(resultsText).toContain(product);
});

