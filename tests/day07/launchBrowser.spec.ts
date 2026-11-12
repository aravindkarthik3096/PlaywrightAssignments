import {chromium,test} from "@playwright/test";

test("Launch Browser", async () => {
    let browser =await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage(); 
    await page.goto("https://www.google.com"); 
    await page.waitForTimeout(5000);

})

// test("Launch Browser", async ({ page }) => {
//     await page.goto("https://www.google.com");
//     await page.waitForTimeout(10000);
// });