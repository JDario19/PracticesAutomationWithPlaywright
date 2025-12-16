import { Locator, Page, expect } from "@playwright/test";
import { UserHomePageLocators } from "../PagesObjects/UserHomePage.locators";

export class UserHomePage {
    readonly page: Page;
    readonly loc: UserHomePageLocators

    constructor(page: Page){
        this.page = page;
        this.loc = new UserHomePageLocators(page);
    }

    async addTask(name: string, description: string){
    await this.loc.addTaskButton.click();
    await this.loc.taskNameInput.fill(name);
    await this.loc.taskDescriptionInput.fill(description);
    await this.loc.dateButton.click();
    await this.loc.selectTodayButton.click();
    await this.loc.selectPriorityButton.click();
    await this.loc.selectPriority1Button.click();
    await this.loc.saveTaskButton.click();
    }

    async getTaskById(id: string) {
        return this.page
        .getByTestId('project-list-view')
        .locator('.task_content', { hasText: id })
        .first();
    }

    async expectInboxMainPage() {
    await expect(this.loc.inboxMainPage).toBeVisible({ timeout: 5000 });
    }
}

