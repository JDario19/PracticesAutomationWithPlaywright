import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { MainPage } from "../Pages/MainPage";
import { UserHomePage } from "../Pages/UserHomePage";
import { getEnv } from "../utils/env";
import { dismissPostLoginPopups, waitForInboxLoaded } from "../utils/testHelpers";

test.describe("Login page test", () =>{
    let login: LoginPage;
    let mainPage: MainPage;
    let userHomePage: UserHomePage;

    const user = getEnv('QA_USER');
    const pass = getEnv('QA_PASS');
    const wrongPass = getEnv('QA_WRONGPASS');
    
    test.beforeEach(async ({ page }) =>{
        login = new LoginPage(page);
        mainPage = new MainPage(page);
        userHomePage = new UserHomePage(page);
        await page.goto('/', { waitUntil: 'networkidle' });
    })
    test("Login valid credentials", async ({ page}) =>{
        await mainPage.clickLogInHeaderLink();
        await login.login(user, pass);
        await dismissPostLoginPopups(page);
        await waitForInboxLoaded(page, userHomePage.loc.inboxMainPage);
        await userHomePage.expectInboxMainPage();
    })
    test("Login invalid credentials", async ({ page}) =>{
        await mainPage.clickLogInHeaderLink();
        await login.login(user, wrongPass);
        await login.expectErrorMessage();
    })
});