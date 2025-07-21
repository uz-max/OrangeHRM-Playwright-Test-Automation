import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorPopup: Locator;
    readonly emptyUsernameRequiredPopup: Locator;
    readonly emptyPasswordRequiredPopup: Locator;
    readonly forgotYourPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInputField = page.getByRole('textbox', { name: 'Username' });
        this.passwordInputField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorPopup = page.getByRole('alert');
        this.emptyUsernameRequiredPopup = page.getByText('Required').first();
        this.emptyPasswordRequiredPopup = page.getByText('Required').nth(1);
        this.forgotYourPasswordLink = page.getByText('Forgot your password?');
    }

    /**
     * Method to Login to App
     */
    async gotoSite() {
       await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * Method to login using id and password
     * @param username Id
     * @param password password
     */
    async login(username: string, password: string) {
        await this.userNameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
    }

    /**
     * Method to verify type of given input field as 'password'
     * @param locator Locator whose type needs to be checked
     */
    async verifyFieldTypeIsPassword(locator: Locator) {
        const inputType = await locator.getAttribute('type');
        expect(inputType).toBe('password');
    }

    async forgotPasswordMethod() {
        await this.forgotYourPasswordLink.click();
    }


}