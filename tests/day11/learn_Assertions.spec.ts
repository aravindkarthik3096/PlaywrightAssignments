import {chromium,expect,test} from "@playwright/test";
test("Test to learn Assertions", async () => {
    let browser =await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage(); 
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main");
    await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform")
    await page.waitForTimeout(2000);

    let userNameInput = page.getByRole("textbox",{name:"Username"});
    await userNameInput.fill("Demosalesmanager");
    await expect(userNameInput).toHaveValue("Demosalesmanager");

    let passwordInput = page.getByRole("textbox",{name:"Password"});
    await passwordInput.fill("crmsfa");
    await expect(passwordInput).toHaveValue("crmsfa");

    let loginButton= page.getByRole("button",{name:"Login"});
    await expect(loginButton).toBeVisible();   
    await loginButton.click();
    await page.waitForTimeout(2000);

    let crmsfaLink = page.getByText("CRM/SFA");
    await expect(crmsfaLink).toBeEnabled();
    await crmsfaLink.click();
    await page.waitForTimeout(2000);

    let leadsLink =page.getByRole("link",{name:"Leads"});
    await expect(leadsLink).toBeVisible();
    await expect(leadsLink).toBeEnabled();
    await leadsLink.click();
    await page.waitForTimeout(2000);
    
    let createLeadButton = page.getByRole("link",{name:"Create Lead"});
    await expect(createLeadButton).toBeVisible();
    await expect(createLeadButton).toBeEnabled();
    await expect(createLeadButton).toHaveText("Create Lead");
    await createLeadButton.click();
    await page.waitForTimeout(2000);

    let companyNameInput = page.locator("#createLeadForm_companyName");
    await expect(companyNameInput).toBeVisible();
    companyNameInput.fill("Practise  Playwright Assertions");
    await expect(companyNameInput).toHaveValue("Practise  Playwright Assertions");

    let firstNameInput = page.locator("(//input[@name='firstName'])[3]");
    await expect(firstNameInput).toBeVisible();
    await firstNameInput.fill("Aravind Karthik");
    await expect(firstNameInput).toHaveValue("Aravind Karthik");

    let lastNameInput = page.locator("(//input[@name='lastName'])[3]");
    await expect(lastNameInput).toBeVisible();
    await lastNameInput.fill("G R");
    await expect(lastNameInput).toHaveValue("G R");

    let phoneNumberInput = page.locator("#createLeadForm_primaryPhoneNumber");
    await expect(phoneNumberInput).toBeVisible();
    await phoneNumberInput.fill("1234567890");
    await expect(phoneNumberInput).toHaveValue("1234567890");

    let primaryEmailInput = page.locator("#createLeadForm_primaryEmail");
    await expect(primaryEmailInput).toBeVisible();
    await primaryEmailInput.fill("aravind.karthik@example.com");
    await expect(primaryEmailInput).toHaveValue("aravind.karthik@example.com");

    let submitButton = page.locator('[name="submitButton"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await page.waitForTimeout(5000);

    let viewLeadPage = page.locator("//div[@id='sectionHeaderTitle_leads']");
    await expect(viewLeadPage).toHaveText("View Lead");
    // await page.waitForTimeout(2000);

})