import {By, element} from 'protractor';
import { LoginPageConstant } from './login-page.constants';

export class LoginPage {
    static get txtPassword() {
        return element(By.id('user_session_password'));
    }

    static get txtEmail() {
        return element(By.id('user_session_email'));
    }

    static get btnSignIn() {
        return element(By.css('#login_signup input'));
    }

    static get linkSignup(){
        return element(By.cssContainingText('#login_forgot_password a', LoginPageConstant.signup));
    }
    
    static get linkForgotPassword(){
        return element(By.cssContainingText('#login_forgot_password a', LoginPageConstant.forgotPassword));
    }

}
