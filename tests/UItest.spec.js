import { test, expect } from "@playwright/test";
import {
  baseUrl,
  baseUrlTitle,
  globalUrl,
  globalUrlTitle,
  polestar4Title,
  subscribeNewsletterText,
  confirmSubscriptionText,
} from "../config";
import HomePage from "../pages/HomePage";
import GlobalPage from "../pages/GlobalPage";
import SubscribePage from "../pages/SubscribePage";

test("Polestar-E2E", async ({ page }) => {
  const homePage = new HomePage(page);
  const globalPage = new GlobalPage(page);
  const subscribePage = new SubscribePage(page);

  await homePage.goto(baseUrl);
  await expect(await homePage.getTitle()).toBe(baseUrlTitle);

  await homePage.enterGlobalPage();
  await expect(page).toHaveURL(globalUrl);
  await expect(await homePage.getTitle()).toBe(globalUrlTitle);

  await globalPage.validatePoleStar4();
  const h1Title = await globalPage.getPolestar4Title();
  await expect(h1Title).toMatch(polestar4Title);
  console.log('The h1Title text "Polestar 4" was successfully validated.');

  const performanceText = await globalPage.poleStar4Details();
  await expect(performanceText).toMatch("Performance");
  console.log('The subtitle text "Performance" was successfully validated.');

  const motorDetails = await globalPage.motorRangeDetails();
  console.log(motorDetails);

  await globalPage.poleStar5();
  console.log("The Polestar 5 page was successfully validated.");

  const subscribeContent = await subscribePage.validateSubscribeContent();
  await expect(subscribeContent).toMatch(subscribeNewsletterText);
  console.log(
    'The subtitle text "Subscribe Newsletter" was successfully validated.'
  );

  await subscribePage.fillSubscribeFields("fname", "lname", "random@aol.com");

  const confirmMail = await subscribePage.getConfirmSubscriptionContent();
  await expect(confirmMail).toMatch(confirmSubscriptionText);
  console.log("The Email Subscription was successfully validated.");

  await page.close();
});
