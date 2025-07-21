
import { test as baseTest } from '../fixtures/common-fixtures';
import { LeftNavigationPage } from '../pages/LeftNavigationPage';
import { LoginPage } from '../pages/LoginPage';


type HooksFixturesType = {
    gotoUrl: any;
    logout: any;
    gotoPIM: any;
}

export const test = baseTest.extend<HooksFixturesType>({
    gotoUrl: async({loginPage}, use) => {
        await loginPage.gotoSite();
        await use();
    },

    logout: async({userPage}, use) => {
        await use();
        await userPage.logout();
    },

    gotoPIM: async({loginPage, leftNavigationPage}, use) => {
        await loginPage.gotoSite();
        await leftNavigationPage.opemPimModule();
        await use();
    }
})

export { expect } from '@playwright/test'