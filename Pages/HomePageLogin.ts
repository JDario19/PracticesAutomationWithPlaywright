import { Locator, Page } from '@playwright/test';
export class HomePageLogin {
    readonly page: Page;
    readonly emailAddressTxtBox : Locator;
    readonly passwordTxtBox : Locator;
    readonly loginButton : Locator;
    readonly errorMessage : Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAddressTxtBox = page.locator('[data-qa="login-email"]');
        this.passwordTxtBox = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.errorMessage = page.getByText('Your email or password is incorrect!');

    }

    async enterEmailAddress(emailAddress: string) {
        await this.emailAddressTxtBox.fill(emailAddress);
    }       

    async enterPassword(password: string) {
        await this.passwordTxtBox.fill(password);
    }

    async verifyErrorMessage() {
        await this.page.waitForTimeout(1100);
        await this.errorMessage.isVisible();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}