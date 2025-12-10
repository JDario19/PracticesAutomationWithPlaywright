import { test, expect } from "@playwright/test";
import { Login } from "../Pages/Login";
import { MainPage } from "../Pages/MainPage";

test.describe("Login page test", () =>{
    let login;
    let mainPage;
    test.beforeEach(async ({ page }) =>{
        login = new Login(page);
        mainPage = new MainPage(page);
        await page.goto('/')
    })
    test("Login valid credentials", async ({ page}) =>{
        await mainPage.clickLogInHeaderLink();
        await login.enterEmailAddres("j.monteon90@gmail.com");
        await login.enterPassword("dario9090");
        await login.clikcLogin();
        await expect(page).toHaveURL('https://app.todoist.com/app/inbox');
    })
    test("Login invalid crecentials", async ({ page}) =>{
        await mainPage.clickLogInHeaderLink();
        await login.enterEmailAddres("j.monteon90@gmail.com");
        await login.enterPassword("dario900");
        await login.clikcLogin();
        await login.expectErrorMessage();
    })
});