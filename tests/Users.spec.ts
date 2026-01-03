import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { MainPage } from "../Pages/MainPage";
import { getEnv } from "../utils/env";
import { dismissPostLoginPopups, ensurePostLoginReady, waitForInboxLoaded } from "../utils/testHelpers";
import { RegisterUser } from "../Pages/RegisterUser";

test.describe("User registration", () => {
  let login: LoginPage;
  let mainPage: MainPage;
  let registerUser: RegisterUser;
  const user = getEnv("QA_USER");
  const pass = getEnv("QA_PASS");

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    mainPage = new MainPage(page);
    registerUser = new RegisterUser(page);

    await page.goto('/', { waitUntil: 'networkidle' });
  });
    test("Creates a new account successfully", async ({ page }) => {
      const id = Date.now().toString();
      const taskName = `This is my first task ${id}`;
      const name = `Test User ${id}`;
      const email = `testingemail${id}`;
      await mainPage.clickLogInHeaderLink();
      await login.signup(name, email + "@gmail.com");
      await registerUser.registerNewUser("Mr.","Password123!", "10", "May", "1990", "Test", "User", "Test Company", "123 Test St", "Test City", "California", "12345", "United States", "1234567890", "My Address", "ExtraField1", "ExtraField2");
    });

    test("shows an error when email already exists", async ({ page }) => {
      const id = Date.now().toString();
      const name = `Test User ${id}`;
      await mainPage.clickLogInHeaderLink();
      await login.signup(name, "testing321@testing.com");
      await login.expectSignupErrorMessage();
    });
  });

  test.describe("Login user", () => {
    test("Login user with correct email and password", async ({ page }) => {
      // TODO: implement later
    });

    test("Login user with incorrect email and password", async ({ page }) => {
      // TODO: implement later
    });
    });
