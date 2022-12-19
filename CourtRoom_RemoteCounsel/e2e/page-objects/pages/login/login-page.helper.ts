import {CommonPageHelper} from '../common/common-page.helper';
import {LoginPage} from './login.po';
import {browser} from 'protractor';

export class LoginPageHelper extends CommonPageHelper {
    static async waitForSometime() {
        browser.sleep(8000);
    }

    /**
     * Navigated to the home page
     * @param url URL to navigate to
     * @returns control after navigation to the mentioned URL
     */
    public async goToPage(url: string) {
        return super.goTo(url);
    }

    /**
     * Enters email value in the email field
     * @param email email to add
     */
    public async setUsername(email: string) {
        await super.sendKeys(LoginPage.txtEmail, email);
    }

    /**
     * Enters password value in the password field
     * @param password password to add
     */
    public async setPassword(password: string) {
        await super.sendKeys(LoginPage.txtPassword, password);
    }

    /**
     * Clicks on login button
     */
    public async clickLoginButton(){
        await super.click(LoginPage.btnSignIn);
    }

    /**
     * Enters email, password and clicks login
     * @param email Email value to enter
     * @param password Password to enter
     */
    public async loginWithUser(email: string, password: string) {
        await this.setUsername(email);
        await this.setPassword(password);
        await super.click(LoginPage.btnSignIn);
    }

    /**
     * Clicks on signup link
     */
    public async clickSignupLink(){
        await super.click(LoginPage.linkSignup);
    }

    /**
     * Clicks on forgot password link
     */
    public async clickForgotPasswordLink(){
        await super.click(LoginPage.linkForgotPassword);
    }

}
