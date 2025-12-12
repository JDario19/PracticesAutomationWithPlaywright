import { UserHomePage } from "../Pages/UserHomePage";
import { test, expect } from "@playwright/test";
import { Login } from "../Pages/Login";
import { MainPage } from "../Pages/MainPage";

test.describe("Adding tasks", () =>{
    let userHomePage;
    let login;
    let mainPage;
    test.beforeEach(async ({ page }) =>{
        userHomePage = new UserHomePage(page);
        login = new Login(page);
        mainPage = new MainPage(page);
        await page.goto('/')
    })
test("Add a task", async ({ page }) => {
  const id = Date.now().toString();
  const taskName = `This is my first task ${id}`;
  const taskDescription = `This is the description ${id}`;

  await mainPage.clickLogInHeaderLink();
  await login.login("j.monteon90@gmail.com", "dario9090");
  await userHomePage.addTask(taskName, taskDescription);

  const idLocator = page.getByText(id).first();
  await expect(idLocator).toBeVisible();
});

})