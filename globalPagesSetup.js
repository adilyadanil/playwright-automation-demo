import { HomePage } from "./pages/HomePage.js";
// Import other page classes

export class PageManager {

  /** @type {import('playwright').Page} */
  static page;

  /** @type {HomePage} */
  static homePage;

  // Initialize other page instances


  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    PageManager.page = page;
    PageManager.homePage = new HomePage(page);

    // Initialize other page instances

  }
}
