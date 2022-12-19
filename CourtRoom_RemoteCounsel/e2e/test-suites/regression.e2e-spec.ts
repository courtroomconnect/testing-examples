import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import { CommonPageHelper } from '../page-objects/pages/common/common-page.helper';
import { DashboardPageHelper } from '../page-objects/pages/Dashboard/dashboard-page.helper';
import { browser } from 'protractor';
import { SignupPageHelper } from '../page-objects/pages/signup/signup-page.helper';
import { SignupPageConstant } from '../page-objects/pages/signup/signup-page.constants';

describe('Courtroom suite', () => {
    let loginPageHelper: LoginPageHelper;
    let dashboardPageHelper: DashboardPageHelper;
    let commonPageHelper: CommonPageHelper;
    let signupPageHelper: SignupPageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
        loginPageHelper.goToPage(browser.baseUrl);
        commonPageHelper = new CommonPageHelper();
        commonPageHelper.maximizeWindow();
        dashboardPageHelper = new DashboardPageHelper();
        dashboardPageHelper.clickLogin();
    });

    xit('Validate login into the application', async () => {
        const email = CommonPageHelper.userOneEmail;
        const password = CommonPageHelper.userOnePassword;
        loginPageHelper.loginWithUser(email, password);
        dashboardPageHelper.verifyLoginSuccessMessage();
        dashboardPageHelper.verifyContentOrbitOptions();
    });

    fit('Validate signup for the application', async () => {
        const randomString = await CommonPageHelper.getRandomString(5);
        const email = 'test' + randomString + '@mailinator.com';
        const company = 'testcomp_' + randomString;
        loginPageHelper.clickSignupLink();
        signupPageHelper = new SignupPageHelper();
        signupPageHelper.signUp(email, randomString, randomString, SignupPageConstant.phoneNumber, SignupPageConstant.alternatePhoneNumber, company, randomString, SignupPageConstant.state, SignupPageConstant.password, SignupPageConstant.password);
        dashboardPageHelper.verifySignupSuccessMessage(email);
    });

});
