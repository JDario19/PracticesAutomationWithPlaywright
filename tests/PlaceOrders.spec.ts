import test from "@playwright/test";


test.describe("Place orders test", () =>{

    test.beforeEach( async ({page}) =>{
         await page.goto("/", { waitUntil: "domcontentloaded" });
    });

    test("Place an order as a unregistered user", async ({page}) => {

    });

    test("Place an order as a registered user", async ({page}) =>{

    });
}); 