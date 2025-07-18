import { test, expect } from '../fixtures/hooks-fixtures';
import loginModuleData from '../data/login-module-data.json';

test.use({storageState: {
    cookies: [],
    origins: []
}})

test('Login with invalid password', async({gotoUrl, loginPage, commonUtils}) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    
    await loginPage.login(username, loginModuleData.wrong_password);

    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);

    await expect(loginPage.userNameInputField).toBeVisible();
})

test('Login with invalid username', async({gotoUrl, loginPage, commonUtils}) => {
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    
    await loginPage.login(loginModuleData.wrong_username, password);

    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);

    await expect(loginPage.userNameInputField).toBeVisible();
})

test('Login with invalid credentials', async({gotoUrl, loginPage, commonUtils}) => {
    
    await loginPage.login(loginModuleData.wrong_username, loginModuleData.wrong_password);

    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);

    await expect(loginPage.userNameInputField).toBeVisible();
})