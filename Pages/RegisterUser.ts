import { Page } from "@playwright/test";
import { RegisterUserLocators } from "../PagesObjects/Registeruser.locators";
import { title } from "process";

export class RegisterUser{
    fillRegistrationForm(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, arg9: string, arg10: string, arg11: string, arg12: string, arg13: string, arg14: string, arg15: string, arg16: string) {
      throw new Error("Method not implemented.");
    }
    readonly page: Page;
    readonly loc: RegisterUserLocators;

    constructor (page: Page){
        this.page = page;
        this.loc = new RegisterUserLocators(page);
    }

    async registerNewUser(p0: string, p1: string, p2: string, p3: string, p4: string, p5: string, p6: string, p7: string, p8: string, p9: string, p10: string, p11: string, p12: string, p13: string, p14: string, p15: string, p16: string){
        await this.loc.title.waitFor({ state: 'visible' });
        await this.loc.title.click();  
        await this.loc.password.fill("SecurePassword123");
        await this.loc.dateOfBirthDay.selectOption("10");
        await this.loc.dateOfBirthMonth.selectOption("May");
        await this.loc.dateOfBirthYear.selectOption("1990");
        await this.loc.firstName.fill("John");
        await this.loc.lastName.fill("Doe");
        await this.loc.company.fill("Example Corp");
        await this.loc.address1.fill("123 Main St");
        await this.loc.country.selectOption("United States");
        await this.loc.state.fill("California");
        await this.loc.city.fill("Los Angeles");
        await this.loc.zipCode.fill("90001");
        await this.loc.mobileNumber.fill("1234567890");
        await this.loc.createAccountButton.click();
        await this.loc.accountCreatedMessage.waitFor({ state: 'visible' });
        await this.loc.congratulationsMessage.waitFor({ state: 'visible' });
        await this.loc.explanationMessage.waitFor({ state: 'visible' });
    }
}