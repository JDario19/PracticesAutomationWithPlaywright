import { Locator, Page } from "@playwright/test";

export class UserHomePageLocators {
    readonly page: Page;
    readonly loggedInUserLabel: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.loggedInUserLabel = page.getByText("Logged in as");
      this.logoutButton = page.getByText('Logout');
    }
}