import {CommonPageHelper} from '../common/common-page.helper';
import { DashboardPageConstant } from './dashboard-page.constants';
import {DashboardPage} from './dashboard.po';

export class DashboardPageHelper extends CommonPageHelper {
    
     /**
     * Click on Login link from top bar
     */
     public async clickLogin() {
        await super.click(DashboardPage.topBar.login);
    }

   
    public async verifyContentOrbitOptions() {
        await super.waitTillElementIsVisisble(DashboardPage.contentOrbitOptions.welcome);
        await expect(await DashboardPage.contentOrbitOptions.welcome.isDisplayed()).toBe(true);
        await expect( await DashboardPage.contentOrbitOptions.platform.isDisplayed()).toBe(true);
        await expect( await DashboardPage.contentOrbitOptions.support.isDisplayed()).toBe(true);
        await expect( await DashboardPage.contentOrbitOptions.training.isDisplayed()).toBe(true);
     }

     public async verifyLoginSuccessMessage(){
        await super.waitTillElementIsVisisble(DashboardPage.contentOrbitOptions.welcome);
        await expect(await DashboardPage.alertMessage.getText()).toContain(DashboardPageConstant.loginSuccess);
     }

     public async verifySignupSuccessMessage(email: string){
      let signupSuccessMessage = `Thanks for signing up! An email has been sent to ${email} with instructions on how to immediately activate your account.`;
      await super.waitTillElementIsVisisble(DashboardPage.alertMessage);
      await expect(await DashboardPage.alertMessage.getText()).toContain(signupSuccessMessage);
     }
     

}
