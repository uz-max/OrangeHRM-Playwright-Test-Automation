import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    readonly page: Page;
    readonly dashboardPageTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.dashboardPageTitle = page.getByRole('heading', { name: 'Dashboard' });
    }
}