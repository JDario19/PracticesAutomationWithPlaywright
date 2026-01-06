import { Page, Locator, expect } from "@playwright/test";

export class LoginPageLocators{
    readonly page: Page;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly SignupName: Locator;
    readonly SignupEmail: Locator;
    readonly loginButton: Locator;
    readonly signupButton: Locator;
    readonly errorLoginMessage: Locator;
    readonly errorsignupMessage: Locator;

    constructor(page: Page){
        this.page  = page;
        this.loginEmail = page.locator('[data-qa="login-email"]'); //due to the app implementation, needs to be by locator
        this.loginPassword = page.locator('[data-qa="login-password"]');//due to the app implementation, needs to be by locator  
        this.SignupName= page.locator('[data-qa="signup-name"]'); //due to the app implementation, needs to be by locator
        this.SignupEmail = page.locator('[data-qa="signup-email"]');//due to the app implementation, needs to be by locator
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.signupButton = page.locator('[data-qa="signup-button"]');//due to the app implementation, needs to be by locator
        this.errorLoginMessage = page.getByText("Your email or password is incorrect!");
        this.errorsignupMessage = page.getByText("Email Address already exist!");
    }
}