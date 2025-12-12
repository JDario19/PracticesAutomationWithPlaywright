import { Page, Locator, expect } from "@playwright/test";

export class Login{
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
    async enterEmailAddres(email: string){
        await this.email.fill(email)
    }
    async enterPassword(password: string){
        await this.password.fill(password)
    }
    async clikcLogin(){
        await this.loginButton.click();
    }
    async expectErrorMessage(){
        await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
    }
}