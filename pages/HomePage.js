import { expect } from "@playwright/test";

class HomePage {
  constructor(page) {
    this.page = page;
    this.rejectCookies = page.locator(
      ".banner-actions-container #onetrust-reject-all-handler"
    );
    this.enterHome = page.locator(".css-1v5buuo .css-1p2wkou .css-1lfoa71");
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    await this.page.waitForTimeout(2000);
    return await this.page.title();
  }

  async enterGlobalPage() {
    await this.page.waitForSelector("text=Welcome");
    await this.rejectCookies.click();
    await this.enterHome.click();
  }
}

export default HomePage;
