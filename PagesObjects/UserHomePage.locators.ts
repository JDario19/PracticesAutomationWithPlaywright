import { Page, Locator } from "@playwright/test";

export class UserHomePageLocators {
  readonly addTaskButton: Locator;
  readonly taskNameInput: Locator;
  readonly taskDescriptionInput: Locator;
  readonly dateButton: Locator;
  readonly selectTodayButton: Locator;
  readonly selectPriorityButton: Locator;
  readonly selectPriority1Button: Locator;
  readonly saveTaskButton: Locator;
  readonly inboxMainPage: Locator;
  readonly infoTaskButton: Locator;
  readonly deleteTaskButtonTestId: Locator;
  readonly deleteConfirmButton: Locator;

  constructor(page: Page) {
    this.addTaskButton = page.getByRole('button', { name: 'Añadir tarea' }).first();
    this.taskNameInput = page.getByRole('textbox', { name: 'Nombre de la tarea' });
    this.taskDescriptionInput = page.getByRole('textbox', { name: 'Descripción' });
    this.dateButton = page.getByRole('button', { name: 'Establecer fecha' });
    this.selectTodayButton = page.locator("//*[@data-track='scheduler|date_shortcut_today']");
    this.selectPriorityButton = page.getByRole('button', { name: 'Establecer prioridad' });
    this.selectPriority1Button = page.getByRole('option', { name: 'Prioridad 1' });
    this.saveTaskButton = page.getByRole('button', { name: 'Añadir tarea' });
    this.inboxMainPage = page.getByRole('heading', { name: 'Bandeja de entrada' });
    this.infoTaskButton = page.getByRole('button', { name: 'Más acciones' });
    this.deleteTaskButtonTestId = page.getByRole('menuitem', { name: /Eliminar/ });
    this.deleteConfirmButton = page.getByRole('button', { name: 'Eliminar' });
  }
}
