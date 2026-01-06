import { Locator, Page, expect } from "@playwright/test";

export class MainPageLocators{
    readonly page: Page;
    readonly signupLoginHeaderLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.signupLoginHeaderLink = page.getByText('Signup / Login');
        
    }
}