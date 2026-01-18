import { test as baseTest, expect } from "@playwright/test";
import { test } from "./fixtures";
import { getEnv } from "../utils/env";


baseTest.describe("Place orders test", () =>{
  const user = getEnv("QA_USER");
  const pass = getEnv("QA_PASS");
  const wrongPass = "QA_WRONGPASS"
  
    test.beforeEach( async ({page}) =>{
         await page.goto("/", { waitUntil: "domcontentloaded" });
    });

    test("Place an order as a unregistered user", async ({pages}) => {
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
    await pages.registerPage.continueAfterRegistration();
    await pages.userHomePage.addBlueTopToCart();
    await pages.userHomePage.continueShoppingAfterAddingToCart();
    await pages.userHomePage.goToCartPage();
    });

    test("Place an order as a registered user", async ({page}) =>{

    });
});