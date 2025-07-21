import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixtures';

test.only('Login Test', async({page, gotoUrl, loginPage}) => {
    await loginPage.gotoSite();
})