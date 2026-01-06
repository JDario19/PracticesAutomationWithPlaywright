import { Page } from "@playwright/test";
import { UserHomePageLocators } from "../PagesObjects/UserHomePage.locators";

export class UserHomePage {
    readonly page: Page;
    readonly loc: UserHomePageLocators;

    constructor(page: Page){
        this.page = page;
        this.loc = new UserHomePageLocators(page);
    }

    async expectLoggedInUserLabel(){
        await this.loc.loggedInUserLabel.waitFor({ timeout: 5000 });
    }

    async logoutUser(){
        await this.loc.logoutButton.click();
    }
}