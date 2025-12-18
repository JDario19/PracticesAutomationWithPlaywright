import { UserHomePage } from "../Pages/UserHomePage";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { MainPage } from "../Pages/MainPage";
import { getEnv } from "../utils/env";

test.describe("Adding tasks", () => {
    let userHomePage: UserHomePage;
    let login: LoginPage;
    let mainPage: MainPage;
    const user = getEnv('QA_USER');
    const pass = getEnv('QA_PASS');
    test.beforeEach(async ({ page }) => {
        userHomePage = new UserHomePage(page);
        login = new LoginPage(page);
        mainPage = new MainPage(page);
        await page.goto('/')
    })
    test("Add a task, then delete by three dots", async ({ page }) => {
        const id = Date.now().toString();
        const taskName = `This is my first task ${id}`;
        const taskDescription = `This is the description ${id}`;

        await mainPage.clickLogInHeaderLink();
        await login.login(user, pass);
        await userHomePage.addTask(taskName, taskDescription);

        const idLocator = page.getByText(id).first();
        await expect(idLocator).toContainText(id);
        await idLocator.hover();
        await userHomePage.openTaskInfoById(id);
        await userHomePage.deleteTaskById(id);
    });

})