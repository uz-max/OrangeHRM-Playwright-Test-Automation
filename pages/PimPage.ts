import { Locator, Page } from "@playwright/test";
import pimData from '../data/pim-module-data.json'


export class PimPage {
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly employeeId: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;
    readonly employeeNameTextBox: Locator;
    readonly employeeSuggestion: Locator;
    readonly searchButton: Locator;
    readonly addEmployeeButton: Locator;
    readonly emptyFirstNameTextBoxRequiredPopup: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addPimButton = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeId = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');
        this.employeeNameTextBox = page.getByRole('textbox', { name: 'Type for hints...' }).first();
        this.employeeSuggestion = page.getByRole('option', { name: pimData.employeeName });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.addEmployeeButton = page.getByRole('listitem').filter({ hasText: 'Add Employee' });
        this.emptyFirstNameTextBoxRequiredPopup = page.getByText('Required').first();
    }

    async addEmployee(firstName: string, middleName: string, lastName: string) {
        await this.addPimButton.click();
        await this.firstNameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.saveButton.click();
    }

    // async searchEmployee(nameOfEmployee: string) {
    //     this.employeeNameTextBox.fill(nameOfEmployee);
    //     this.employeeSuggestion.click();
    //     this.searchButton.click();
    // }
}