import { Page, Locator, expect } from "@playwright/test";
import { LoginPageLocators } from "../PagesObjects/LoginPage.locators";

export class LoginPage{
    readonly page: Page;
    readonly loc: LoginPageLocators;

    constructor(page: Page){
        this.page  = page;
        this.loc = new LoginPageLocators(page);
    }
    async login(email: string, password: string){
        await this.loc.email.fill(email)
        await this.loc.password.fill(password)
        await this.loc.loginButton.click(); 
    }
    async expectErrorMessage(){
        await expect(this.loc.errorMessage).toBeVisible({ timeout: 5000 });
    }
}