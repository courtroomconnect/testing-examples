import {CommonPageHelper} from '../common/common-page.helper';
import { SignupPage } from './signup.po';
import {By, element} from 'protractor';

export class SignupPageHelper extends CommonPageHelper {
    public async verifySignupPageTitleDisplayed() {
        await super.waitTillElementIsVisisble(SignupPage.pageHeader);
        await expect(await SignupPage.pageHeader.isDisplayed()).toBe(true);
     }

     /**
     * Enters email value in the email field
     * @param email email to add
     */
    public async setEmail(email: string) {
        await super.sendKeys(SignupPage.txtEmail, email);
    }

    /**
     * Enters firstName value in the firstName field
     * @param firstName first Name to add
     */
    public async setFirstName(firstName: string) {
        await super.sendKeys(SignupPage.txtFirstName, firstName);
    }

     /**
     * Enters lastName value in the lastName field
     * @param lastName last Name to add
     */
     public async setLastName(lastName: string) {
        await super.sendKeys(SignupPage.txtLastName , lastName);
    }

    /**
     * Enters phone value in the phone field
     * @param phone phone to add
     */
    public async setPhone(phone: string) {
        await super.sendKeys(SignupPage.txtPhone, phone);
    }

    /**
     * Enters alternate phone value in the alternate phone field
     * @param alternatePhone alternate phone to add
     */
    public async setAlternatePhone(alternatePhone: string) {
        await super.sendKeys(SignupPage.txtAlterPhone, alternatePhone);
    }

    /**
     * Enters company value in the company field
     * @param company company to add
     */
    public async setCompany(company: string) {
        await super.sendKeys(SignupPage.txtCompany, company);
    }

    /**
     * Enters city value in the city field
     * @param city city to add
     */
    public async setCity(city: string) {
        await super.sendKeys(SignupPage.txtCity, city);
    }

    /**
     * Enters state value in the state field
     * @param state state to add
     */
    public async selectState(state: string) {
        await super.click(element(By.cssContainingText('option', state)));
    }

    /**
     * Enters city value in the city field
     * @param city city to add
     */
    public async setPassword(password: string) {
        await super.sendKeys(SignupPage.txtPassword, password);
    }

    /**
     * Enters password value in the city field
     * @param password password to add
     */
    public async setConfirmPassword(password: string) {
        await super.sendKeys(SignupPage.txtConfirmPassword, password);
    }

    /**
     * Clicks on submit button
     */
    public async clickSubmitButton(){
        await super.click(SignupPage.btnSubmit);
    }

    /**
     * signups a new user
     * @param email : email to signup
     * @param firstName : first name of user
     * @param lastName : last name of user
     * @param phoneNumber : phone number of user
     * @param alternatePhone : alternate phone number name of user
     * @param company : company name of user
     * @param city : city name of user
     * @param state : state name of user
     * @param password : password of user
     * @param confirmPassword : confirm password of user
     */
    public async signUp(email: string, firstName: string, lastName: string, phoneNumber: string, alternatePhone: string, company: string, city: string, state: string, password: string, confirmPassword: string){
        this.setEmail(email);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setPhone(phoneNumber);
        this.setAlternatePhone(alternatePhone);
        this.setCompany(company);
        this.setCity(city);
        this.selectState(state);
        this.setPassword(password);
        this.setConfirmPassword(confirmPassword);
        this.clickSubmitButton();
    }
}
