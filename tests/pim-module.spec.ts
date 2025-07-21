import { test, expect } from '../fixtures/hooks-fixtures';
import pimData from '../data/pim-module-data.json';

test.describe('PIM Page Test Cases', {
    tag: '@PIM Page',
    annotation: {
        type: 'Story Link',
        description: 'Link of story'
    }
}, () => {

    test('Verify PIM page loads correctly', async ({ gotoPIM, leftNavigationPage, page }) => {
        //await leftNavigationPage.pimLink.click();
        await page.waitForURL('**/pim/viewEmployeeList'); //wait for URL to load
        await expect(page).toHaveURL(/.*viewEmployeeList$/); //verify title
    })

    // test('Verify employee search by name',async({gotoPIM, pimPage}) => {
    //     await pimPage.searchEmployee(pimData.employeeName);
    // })

    test('Verify that new Employee is created under PIM', async ({ gotoPIM, leftNavigationPage, pimPage }, testInfo) => {
        const browser = testInfo.project.name;
        const uniqueEmployeeId = `EMP-${browser}-${Date.now()}`;

        await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    })

    test('Verify required field validations in Add Employee', async ({ gotoPIM, pimPage }) => {
        await pimPage.addEmployeeButton.click();
        await pimPage.saveButton.click();
        await expect(pimPage.emptyFirstNameTextBoxRequiredPopup).toBeVisible();
    })
});