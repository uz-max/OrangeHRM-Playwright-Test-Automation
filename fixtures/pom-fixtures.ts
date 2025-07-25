
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavigationPage } from '../pages/LeftNavigationPage';
import { PimPage } from '../pages/PimPage';
import { ResetPassword } from '../pages/ResetPasswordPage';

type PomFixtureType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PimPage;
    resetPassword: ResetPassword;
}

export const test = baseTest.extend<PomFixtureType>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async({page}, use) => {
        await use(new DashboardPage(page));
    },

    userPage: async({page}, use) => {
        await use(new UserPage(page));
    },

    leftNavigationPage: async({page}, use) => {
        await use(new LeftNavigationPage(page));
    },

    pimPage: async({page}, use) => {
        await use(new PimPage(page));
    },

    resetPassword: async({page}, use) => {
        await use(new ResetPassword(page));
    }
});
