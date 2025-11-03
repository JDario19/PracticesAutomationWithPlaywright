import type { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signUpLoginHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpLoginHeader = page.getByText('Signup / Login');
    }

    async clickSignUpLogin() {
        await this.signUpLoginHeader.click();
    }
}