import { expect, Page } from "@playwright/test";
import { UserHomePageLocators } from "../PagesObjects/UserHomePage.locators";

export class UserHomePage {
  readonly page: Page;
  readonly loc: UserHomePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.loc = new UserHomePageLocators(page);
  }

  async expectLoggedInUserLabel() {
    await expect(this.loc.loggedInUserLabel).toBeVisible({ timeout: 5000 });
  }

  async logoutUser() {
    await this.loc.logoutButton.click();
  }

  async addBlueTopToCart() {
    await this.loc.blueTopCard.hover();
    await this.loc.blueTopAddToCart.click();
    await expect(this.loc.addedMessage).toBeVisible();
  }

  async continueShoppingAfterAddingToCart() {
    await this.loc.continueShoppingButton.click();
  }

  async viewCartAfterAddingToCart() {
    await this.loc.viewCartButton.click();
  }

  async goToCartPage() {
    await this.loc.cartButton.click();
  }
}
