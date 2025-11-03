import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { HomePageLogin } from "../Pages/HomePageLogin";
import { UserLogin } from "../Pages/UserLogin";

test.describe("Login Page Tests", () => {
    let homePage;
    let homePageLogin;
    let userLogin;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePageLogin = new HomePageLogin(page);
        userLogin = new UserLogin(page);
        await page.goto("/");
    });

    test("Verify navigation to Login Page", async ({ page }) => {
        await homePage.clickSignUpLogin();
        await homePageLogin.enterEmailAddress("testing321@testing.com");
        await homePageLogin.enterPassword("12345");
        await homePageLogin.clickLoginButton();
        await expect(userLogin.LoggedAsUser).toBeVisible();
        // Add assertions here to verify successful login
    });
});