import {By, element} from 'protractor';
import { DashboardPageConstant } from './dashboard-page.constants';

export class DashboardPage {
    static get topBar() {
        return {
            testCenter: element(By.cssContainingText('.top-bar-section a', DashboardPageConstant.testCenter)),
            login: element(By.cssContainingText('.top-bar-section a', DashboardPageConstant.login)),
            register: element(By.cssContainingText('.top-bar-section a', DashboardPageConstant.register)),
        };
    }

    static get contentOrbitOptions() {
        return {
            welcome: element(By.cssContainingText('a.small', DashboardPageConstant.welcome)),
            platform: element(By.cssContainingText('a.small', DashboardPageConstant.platform)),
            support: element(By.cssContainingText('a.small', DashboardPageConstant.support)),
            training: element(By.cssContainingText('a.small', DashboardPageConstant.training)),
        };
    }

    static get alertMessage(){
        return element(By.css('#flash_messages .alert-box'));
    }

}
