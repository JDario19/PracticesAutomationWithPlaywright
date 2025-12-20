import { UserHomePage } from "../Pages/UserHomePage";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { MainPage } from "../Pages/MainPage";
import { getEnv } from "../utils/env";
import { dismissPostLoginPopups, waitForInboxLoaded } from "../utils/testHelpers";

test.describe("Adding tasks", () => {
  let userHomePage: UserHomePage;
  let login: LoginPage;
  let mainPage: MainPage;
  const user = getEnv("QA_USER");
  const pass = getEnv("QA_PASS");

  test.beforeEach(async ({ page }) => {
    userHomePage = new UserHomePage(page);
    login = new LoginPage(page);
    mainPage = new MainPage(page);
    await page.goto("/");
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test.describe("Add & Delete", () => {
    test("Add a task and delete it from the inbox using the three-dots menu", async ({ page }) => {
      const id = Date.now().toString();
      const taskName = `This is my first task ${id}`;
      const taskDescription = `This is the description ${id}`;

      await mainPage.clickLogInHeaderLink();
      await login.login(user, pass);
      await dismissPostLoginPopups(page);
      await waitForInboxLoaded(page, userHomePage.loc.inboxMainPage);
      await userHomePage.addTask(taskName, taskDescription);

      const idLocator = page.getByText(id).first();
      await expect(idLocator).toContainText(id);
      await idLocator.hover();
      await userHomePage.openTaskActionsMenuById(id);
      await userHomePage.deleteTaskById(id);
    });

    test("Add a task and delete it from the task detail view", async ({ page }) => {
      const id = Date.now().toString();
      const taskName = `This is my first task ${id}`;
      const taskDescription = `This is the description ${id}`;

      await mainPage.clickLogInHeaderLink();
      await login.login(user, pass);
      await userHomePage.addTask(taskName, taskDescription);

      const idLocator = page.getByText(id).first();
      await expect(idLocator).toContainText(id);
      await idLocator.hover();
      await userHomePage.openTaskDetailById(id);
      await userHomePage.openTaskDetailActionsMenu();
      await userHomePage.deleteTaskById(id);
    });
  });

  test.describe("Add & Complete", () => {
    test("Add a task and mark it as done from the inbox", async ({ page }) => {
      // TODO: implement later
    });

    test("Add a task and mark it as done from the task detail view", async ({ page }) => {
      // TODO: implement later
    });
  });
});
