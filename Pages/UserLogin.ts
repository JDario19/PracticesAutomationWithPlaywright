import { Locator, Page } from "@playwright/test";

export class UserLogin {    
    readonly page: Page;
    readonly LoggedAsUser: Locator
    constructor(page: Page) {
        this.page = page;    
        this.LoggedAsUser = page.getByText('testing321');    
    }    
    async verifyUserLoggedIn() {
        await this.LoggedAsUser.isVisible();
    }
}