import { expect } from "@playwright/test";

class SubscribePage {
  constructor(page) {
    this.page = page;
    this.subscribeButton = page.locator(".css-12pzbqb .css-1fpy17g");
    this.firstNameInput = page.locator("//input[@name='firstName']");
    this.lastNameInput = page.locator("//input[@name='lastName']");
    this.emailInput = page.locator("//input[@name='email']");
    this.countryDropdown = page.locator(".css-9pq9cn");
    this.countryOption = page.getByRole("option", { name: "Albania" });
    this.confirmSubscriptionContent = page.locator(".css-1la07n1 .css-1euduvz");
    this.submitBtn = page.locator(".css-1takr28");
  }

  async validateSubscribeContent() {
    await this.subscribeButton.click();
    return await this.page
      .locator(".css-gzl41q .css-oxwe59 .css-1euduvz")
      .textContent();
  }

  async fillSubscribeFields(firstName, lastName, email) {
    await this.page.waitForTimeout(3000);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.countryDropdown.click();
    await this.countryOption.click();
    await this.submitBtn.click();
  }

  async getConfirmSubscriptionContent() {
    await this.page.waitForTimeout(3000);
    return await this.confirmSubscriptionContent.textContent();
  }
}

export default SubscribePage;
