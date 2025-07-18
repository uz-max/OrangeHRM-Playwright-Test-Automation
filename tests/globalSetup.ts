
import { expect } from '@playwright/test';
import { test } from '../fixtures/common-fixtures';

test('Global Setup for Auto Login', async({page, commonUtils, loginPage, dashboardPage})=>{
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.gotoSite();
    await loginPage.login(decryptedUserName, decryptedPassword);

    //waiting for URL to ensure Login
    await page.waitForURL(process.env.BASE_URL+'/web/index.php/dashboard/index');

    //assertion to check title
    await expect(dashboardPage.dashboardPageTitle).toHaveText('Dashboard');

    //save and reuse authentication
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})