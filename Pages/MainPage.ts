import { Locator, Page, expect } from "@playwright/test";
import { MainPageLocators } from "../PagesObjects/MainPage.locators";

export class MainPage{
    readonly page: Page;
    readonly loc: MainPageLocators;

    constructor(page: Page){
        this.page = page;
        this.loc = new MainPageLocators(page);
    }
    async clickLogInHeaderLink(){
        //await expect(this.loc.signupLoginHeaderLink).toBeVisible({ timeout: 5000 });
        await this.loc.signupLoginHeaderLink.click();
    }
}