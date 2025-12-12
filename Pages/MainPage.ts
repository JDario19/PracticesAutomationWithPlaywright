import { Locator, Page, expect } from "@playwright/test";

export class MainPage{
    readonly page: Page;
    readonly logInHeaderLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.logInHeaderLink = page.getByRole('link', {name: 'Log in'});
    }
    async clickLogInHeaderLink(){
        await expect(this.logInHeaderLink).toBeVisible({ timeout: 5000 });
        await this.logInHeaderLink.click();
    }
}