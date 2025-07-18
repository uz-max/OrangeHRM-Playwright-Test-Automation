import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixtures';

test('Login Test', async({page, gotoUrl}) => {
    console.log(await page.title());
})

test('Sample 2', async({page, gotoUrl})=>{
    await expect(page).toHaveTitle('OrangeHRM');
})

test('Test 3', async({page, gotoUrl, logout}) => {
    await expect(page).toHaveTitle('OrangeHRM');
})