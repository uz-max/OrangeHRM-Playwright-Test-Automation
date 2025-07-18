import { test, expect } from '../fixtures/hooks-fixtures';
import pimData from '../data/pim-module-data.json';

test('Verify that new Employee is created under PIM', async({gotoUrl, leftNavigationPage, pimPage}) => {
    await leftNavigationPage.opemPimModule();
    await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
    await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
})