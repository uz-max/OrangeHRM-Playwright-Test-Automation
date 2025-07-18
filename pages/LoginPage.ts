import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInputField = page.getByRole('textbox', { name: 'Username' });
        this.passwordInputField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorPopup = page.getByRole('alert');
    }

    /**
     * Method to Login to App
     */
    async gotoSite() {
       await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    async login(username: string, password: string) {
        await this.userNameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
    }
}