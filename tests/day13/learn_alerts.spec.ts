import {chromium,test} from "@playwright/test";

test("Test to learn Alerts",async()=>{

    let browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"], 
    });
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForTimeout(5000);

    page.on("dialog",async(dialogAlert)=>{
        switch(dialogAlert.type()){

            case "alert":
                console.log("Alert message is : "+dialogAlert.message());
                await dialogAlert.accept();
                console.log("Alert accepted successfully");
                break;

            case "confirm":
                console.log("Confirm message is : "+dialogAlert.message());
                await dialogAlert.dismiss();
                console.log("Confirm dismissed successfully");
                break;

            case "prompt":
                console.log("Prompt message is : "+dialogAlert.message());
                await dialogAlert.accept("Aavind Karthik has entered");
                console.log("Prompt accepted successfully");
                break;
        }
    })

    // Simple Alert
        // page.locator("//span[text()='Show']").first().click();
        page.locator("//h5[text()=' Alert (Simple Dialog)']//following-sibling::button/span[2]").click();
        await page.waitForTimeout(5000);

        // Confirmation Alert
        page.locator("//span[text()='Show']").nth(1).click();
        await page.waitForTimeout(5000);

        // Prompt Alert
        page.locator("//span[text()='Show']").nth(4).click();
        await page.waitForTimeout(5000);

})

