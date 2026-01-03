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
        this.loginEmail = page.getByRole('textbox', {name: "email"});
        this.loginPassword = page.getByRole('textbox', {name: "Password"});
        this.SignupName= page.locator('[data-qa="signup-name"]'); //due to the app implementation, needs to be by locator
        this.SignupEmail = page.locator('[data-qa="signup-email"]');//due to the app implementation, needs to be by locator
        this.loginButton = page.getByRole('button', {name: 'Log in'});//due to the app implementation, needs to be by locator
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.errorLoginMessage = page.getByText("Wrong email or password.");
        this.errorsignupMessage = page.getByText("Email Address already exist!");
    }
}