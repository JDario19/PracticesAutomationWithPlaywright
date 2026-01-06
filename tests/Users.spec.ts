import { test, expect } from "./fixtures";
import { getEnv } from "../utils/env";

test.describe("User registration", () => {
  const user = getEnv("QA_USER");
  const pass = getEnv("QA_PASS");
  const wrongPass = "QA_WRONGPASS"

  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
  });

  test("Creates a new account successfully", async ({ pages }) => {
    const id = Date.now().toString();
    const name = `Test User ${id}`;
    const email = `testingemail${id}@gmail.com`;

    await pages.mainPage.clickLogInHeaderLink();
    await pages.loginPage.signup(name, email);

    await pages.registerPage.registerNewUser(
      "Mr.",
      "Password123!",
      "10",
      "May",
      "1990",
      "Test",
      "User",
      "Test Company",
      "123 Test St",
      "Test City",
      "California",
      "12345",
      "United States",
      "1234567890",
      "My Address",
      "ExtraField1",
      "ExtraField2"
    );
  });

  test("Creates a new account with an existing email", async ({ pages }) => {
    const id = Date.now().toString();
    const name = `Test User ${id}`;

    await pages.mainPage.clickLogInHeaderLink();
    await pages.loginPage.signup(name, "testing321@testing.com");
    await pages.loginPage.expectSignupErrorMessage();
  });

  test.describe("Login user", () => {
    test("Login user with correct email and password", async ({ pages }) => {
      await pages.mainPage.clickLogInHeaderLink();
      await pages.loginPage.login(user, pass);
      await pages.userHomePage.expectLoggedInUserLabel();
      await pages.userHomePage.logoutUser();
    });

    test("Login user with incorrect email and password", async ({ pages }) => {
      await pages.mainPage.clickLogInHeaderLink();
      await pages.loginPage.login(user, wrongPass);
      await pages.loginPage.expectLoginErrorMessage();
    });
  });
});
