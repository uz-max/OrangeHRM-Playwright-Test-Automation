
import { test as baseTest } from '../fixtures/common-fixtures';
import { LoginPage } from '../pages/LoginPage';

type HooksFixturesType = {
    gotoUrl: any;
    logout: any;
}

export const test = baseTest.extend<HooksFixturesType>({
    gotoUrl: async({loginPage}, use) => {
        await loginPage.gotoSite();
        await use();
    },

    logout: async({userPage}, use) => {
        await use();
        await userPage.logout();
    }
})
export { expect } from '@playwright/test'