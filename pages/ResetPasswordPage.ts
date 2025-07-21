import { Locator, Page } from "@playwright/test";


export class ResetPassword {
    readonly page: Page;
    readonly resetPasswordHeading: Locator;


    constructor(page: Page) {
        this.page = page;
        this.resetPasswordHeading = page.getByRole('heading', { name: 'Reset Password' });
    }

}