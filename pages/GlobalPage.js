import { expect } from "@playwright/test";

class GlobalPage {
  constructor(page) {
    this.page = page;
    this.poleStar4link = page.locator(
      "//body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/span[1]/span[1]/span[1]"
    );
    this.polestar4SideBar = page.locator("#SzewVaOTTi2ORRLNnxFQOA");
    this.polestar4Title = page.locator(".css-16nb6o5");
    this.performance = page.locator(".css-qzz03e .css-1lbuh65");
    this.exploreCar = page.locator(".css-b2ua19 .css-ylk4z6");
    this.dualMotorrangeDetails = page.locator(".css-14jmhkb");
    this.poleStar5link = page.getByRole("link", { name: "Polestar 5" });
  }

  async validatePoleStar4() {
    await this.page.waitForTimeout(3000);
    await this.poleStar4link.click();
  }

  async getPolestar4Title() {
    return await this.polestar4Title.textContent();
  }

  async poleStar4Details() {
    await this.exploreCar.click();
    await this.performance.click();
    return await this.performance.textContent();
  }

  async motorRangeDetails() {
    return await this.dualMotorrangeDetails.allTextContents();
  }

  async poleStar5() {
    await this.poleStar5link.click();
  }
}

export default GlobalPage;
