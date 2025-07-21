import { test, expect } from '../fixtures/hooks-fixtures';
import loginModuleData from '../data/login-module-data.json';

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
})

test.describe('Login Page Test Cases', {
    tag: '@Login Page',
    annotation: {
        type: 'Story Link',
        description: 'Link of story'
    }
}, () => {

    test('Login with valid credentials', async ({ gotoUrl, loginPage, commonUtils, dashboardPage }) => {
        const username = commonUtils.decryptData(process.env.USER_NAME!);
        const password = commonUtils.decryptData(process.env.PASSWORD!);

        await loginPage.login(username, password);
        await expect(dashboardPage.dashboardPageTitle).toBeVisible();

    })

    test('Login with invalid username', async ({ gotoUrl, loginPage, commonUtils }) => {
        const password = commonUtils.decryptData(process.env.PASSWORD!);

        await loginPage.login(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInputField).toBeVisible();
    })

    test('Login with invalid password', async ({ gotoUrl, loginPage, commonUtils }) => {
        const username = commonUtils.decryptData(process.env.USER_NAME!);

        await loginPage.login(username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInputField).toBeVisible();
    })

    test('Login with invalid credentials', async ({ gotoUrl, loginPage, commonUtils }) => {

        await loginPage.login(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInputField).toBeVisible();
    })

    test('Login with both fields empty', async ({ gotoUrl, loginPage, commonUtils }) => {

        await loginPage.login("", "");

        await expect(loginPage.emptyUsernameRequiredPopup).toBeVisible();
        await expect(loginPage.emptyPasswordRequiredPopup).toBeVisible();
    })

    test('Verify password is hidden (masked)', async ({ gotoUrl, loginPage, commonUtils }) => {

        await loginPage.verifyFieldTypeIsPassword(loginPage.passwordInputField);
    })

    test('Verify "Forgot your password?" link works', async ({ gotoUrl, loginPage, page, resetPassword }) => {

        await loginPage.forgotPasswordMethod();

        await page.waitForURL('**/requestPasswordResetCode');

        await expect(resetPassword.resetPasswordHeading).toBeVisible();

        await expect(page).toHaveURL(/.*requestPasswordResetCode$/);

    })

});

