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
        await this.loc.loginButton.fill(email)
        await this.loc.loginPassword.fill(password)
        await this.loc.loginButton.click(); 
    }
    async signup(name: string, email: string){
        await this.loc.SignupName.fill(name)
        await this.loc.SignupEmail.fill(email)
        await this.loc.signupButton.click(); 
    }
    async expectLoginErrorMessage(){
        await expect(this.loc.errorLoginMessage).toBeVisible({ timeout: 5000 });
    }
    async expectSignupErrorMessage(){
        await expect(this.loc.errorsignupMessage).toBeVisible({ timeout: 5000 });
    }
}