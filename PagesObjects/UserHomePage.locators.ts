import { Locator, Page } from "@playwright/test";

export class UserHomePageLocators {
  readonly page: Page;

  readonly loggedInUserLabel: Locator;
  readonly logoutButton: Locator;
  readonly blueTopCard: Locator;
  readonly blueTopAddToCart: Locator;
  readonly addedMessage: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartButton: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loggedInUserLabel = page.getByText("Logged in as");
    this.logoutButton = page.getByText("Logout");
    this.blueTopCard = page
      .locator(".single-products", {
        has: page.locator('a.add-to-cart[data-product-id="1"]'),
      })
      .first();
    this.blueTopAddToCart = this.blueTopCard.locator(
      '.product-overlay a.add-to-cart[data-product-id="1"]'
    );
    this.addedMessage = page.getByRole("heading", { name: "Added!" });
    this.continueShoppingButton = page.getByRole("button", { name: "Continue Shopping" });
    this.viewCartButton = page.getByRole("link", { name: "View Cart" });
    this.cartButton = page.getByText("Cart");
  }
}
