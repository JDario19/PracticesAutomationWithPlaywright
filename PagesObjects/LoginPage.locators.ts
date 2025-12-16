import { Page, Locator, expect } from "@playwright/test";

export class LoginPageLocators{
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page  = page;
        this.email = page.getByRole('textbox', {name: "email"});
        this.password = page.getByRole('textbox', {name: "Password"})
        this.loginButton = page.getByRole('button', {name: 'Log in'});
        this.errorMessage = page.getByText("Wrong email or password.");
    }
}