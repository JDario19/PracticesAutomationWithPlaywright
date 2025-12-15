import { Locator, Page, expect } from "@playwright/test";

export class MainPageLocators{
    readonly page: Page;
    readonly logInHeaderLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.logInHeaderLink = page.getByRole('link', {name: 'Log in'});
    }
}