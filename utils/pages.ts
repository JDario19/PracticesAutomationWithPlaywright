import { Page } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { MainPage } from "../Pages/MainPage";
import { RegisterUser } from "../Pages/RegisterUser";
import { UserHomePage } from "../Pages/UserHomePage";

export function createPages(page: Page) {
  return {
    loginPage: new LoginPage(page),
    mainPage: new MainPage(page),
    registerPage: new RegisterUser(page),
    homePage: new UserHomePage(page),
    userHomePage: new UserHomePage(page),
  };
}

export type Pages = ReturnType<typeof createPages>;
