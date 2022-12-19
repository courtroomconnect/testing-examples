import {By, element} from 'protractor';
import { SignupPageConstant } from './signup-page.constants';

export class SignupPage {
    static get pageHeader(){
        return element(By.cssContainingText('h1', SignupPageConstant.createAccountHeader));
    }

    static get txtEmail(){
        return element(By.id('user_email'));
    }

    static get txtFirstName(){
        return element(By.id('user_first_name'));
    }

    static get txtLastName(){
        return element(By.id('user_last_name'));
    }

    static get txtPhone(){
        return element(By.id('user_phone1'));
    }

    static get txtAlterPhone(){
        return element(By.id('user_phone2'));
    }

    static get txtCompany(){
        return element(By.id('user_reported_institution_name'));
    }

    static get txtCity(){
        return element(By.id('user_city'));
    }

    static get dropDownState(){
        return element(By.id('user_geographic_state_id'));
    }

    static get txtPassword(){
        return element(By.id('user_password'));
    }

    static get txtConfirmPassword(){
        return element(By.id('user_password_confirmation'));
    }

    static get btnSubmit(){
        return element(By.css('#submit input'));
    }

    static get optionState(){
        return element(By.id('user_password'));
    }
}
