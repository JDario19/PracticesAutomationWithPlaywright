import { Locator, Page } from "@playwright/test";

export class UserHomePage {
    readonly page: Page;
    readonly AddTaskButton: Locator;
    readonly TaskNameInput: Locator;
    readonly TaskDescriptionInput: Locator;
    readonly dateButton: Locator;
    readonly selectTodayButton: Locator;
    readonly selectPriorityButton: Locator;
    readonly selectPriority1Button: Locator;
    readonly saveTaskButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.AddTaskButton = page.getByRole('button', {name: 'Añadir tarea'}).first();
        this.TaskNameInput = page.getByRole('textbox', {name: 'Nombre de la tarea'});
        this.TaskDescriptionInput = page.getByRole('textbox', {name: 'Descripción'});
        this.dateButton = page.getByRole('button', {name: 'Establecer fecha'});
        this.selectTodayButton = page.locator("//*[@data-track='scheduler|date_shortcut_today']");
        this.selectPriorityButton = page.getByRole('button', {name: 'Establecer prioridad'});
        this.selectPriority1Button = page.getByRole('option', {name: 'Prioridad 1'});
        this.saveTaskButton = page.getByRole('button', {name: 'Añadir tarea'});
    }

    async addTask(name: string, description: string){
        await this.AddTaskButton.click();
        await this.TaskNameInput.fill(name);
        await this.TaskDescriptionInput.fill(description);
        await this.dateButton.click();
        await this.selectTodayButton.click();
        await this.selectPriorityButton.click();
        await this.selectPriority1Button.click();
        await this.saveTaskButton.click();
    }

    async getTaskById(id: string) {
        return this.page
        .getByTestId('project-list-view')
        .locator('.task_content', { hasText: id })
        .first();
    }
}

