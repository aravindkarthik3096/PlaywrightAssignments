import {chromium,test} from "@playwright/test";

// test("Login into leaftaps application", async ({ page }) => {
//     await page.goto("https://leaftaps.com/opentaps/control/main");
//     await page.waitForTimeout(5000);

//     await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
//     await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
//     await page.getByRole("button",{name:"Login"}).click()

//     await page.waitForTimeout(5000);
// });

test("Login into leaftaps application", async () => {
    let browser =await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage(); 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(5000);

    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click()


    await page.waitForTimeout(5000);

})