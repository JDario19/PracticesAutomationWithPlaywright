import { Locator, Page } from '@playwright/test';
export class HomePageLogin {
    readonly page: Page;
    readonly emailAddressTxtBox : Locator;
    readonly passwordTxtBox : Locator;
    readonly loginButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAddressTxtBox = page.locator('[data-qa="login-email"]');
        this.passwordTxtBox = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');


    }

    async enterEmailAddress(emailAddress: string) {
        await this.emailAddressTxtBox.fill(emailAddress);
    }       

    async enterPassword(password: string) {
        await this.passwordTxtBox.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}