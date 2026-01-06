import { Locator, Page } from "@playwright/test";
import { read } from "fs";


export class RegisterUserLocators{
    readonly page: Page;
    // Add locators for registration page elements here
    readonly title: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly dateOfBirthDay: Locator;
    readonly dateOfBirthMonth: Locator;
    readonly dateOfBirthYear: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address1: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;  
    readonly accountCreatedMessage: Locator;
    readonly congratulationsMessage: Locator;
    readonly explanationMessage: Locator;



    constructor(page: Page){
        this.page = page;
        // Initialize locators here
        this.title = page.getByRole('radio', {name: ' Mr.'});
        this.name = page.getByRole('textbox', {name: 'Name *'});
        this.email = page.getByRole('textbox', {name: 'Email *'});
        this.password = page.getByRole('textbox', {name: 'Password *'});
        this.dateOfBirthDay = page.locator('[data-qa="days"]');//due to the app implementation, needs to be by locator
        this.dateOfBirthMonth = page.locator('[data-qa="months"]');//due to the app implementation, needs to be by locator
        this.dateOfBirthYear = page.locator('[data-qa="years"]');//due to the app implementation, needs to be by locator
        this.firstName = page.getByRole('textbox', {name: 'First name *'});
        this.lastName = page.getByRole('textbox', {name: 'Last name *'});
        this.company = page.locator('[data-qa="company"]');//due to the app implementation, needs to be by locator
        this.address1 = page.locator('[data-qa="address"]');//due to the app implementation, needs to be by locator
        this.country = page.getByRole('combobox', {name: 'Country *'});
        this.state = page.getByRole('textbox', {name: 'State *'});
        this.city = page.getByRole('textbox', {name: 'City *'});
        this.zipCode = page.locator('[data-qa="zipcode"]');//due to the app implementation, needs to be by locator
        this.mobileNumber = page.getByRole('textbox', {name: 'Mobile Number *'});
        this.createAccountButton = page.getByRole('button', {name: 'Create Account'});
        this.accountCreatedMessage = page.getByText("Account Created!");
        this.congratulationsMessage = page.getByText("Congratulations! Your new account has been successfully created!");
        this.explanationMessage = page.getByText("You can now take advantage of member privileges to enhance your online shopping experience with us.");
    }
}