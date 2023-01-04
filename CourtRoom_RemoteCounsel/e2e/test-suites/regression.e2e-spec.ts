import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import { CommonPageHelper } from '../page-objects/pages/common/common-page.helper';
import { DashboardPageHelper } from '../page-objects/pages/Dashboard/dashboard-page.helper';
import { browser } from 'protractor';
// import { SignupPageHelper } from '../page-objects/pages/signup/signup-page.helper';
// import { SignupPageConstant } from '../page-objects/pages/signup/signup-page.constants';
// import { protractor } from 'protractor';

describe('Courtroom suite', () => {
    let loginPageHelper: LoginPageHelper;
    let dashboardPageHelper: DashboardPageHelper;
    let commonPageHelper: CommonPageHelper;
    // let signupPageHelper: SignupPageHelper;

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
        var {MailListener }= require("mail-listener6");

        // here goes your email connection configuration
        var mailListener = new MailListener({
            username: "dhruvpatel.2694+2@gmail.com",
            password: "eyjahswcepxzsuao",
            host: "imap.gmail.com",
            port: 993, // imap port 
            tls: true,
            connTimeout: 10000,
            authTimeout: 5000,
            debug: console.log,
            tlsOptions: { rejectUnauthorized: false },
            mailbox: "INBOX", // mailbox to monitor 
            searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
            markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
            fetchUnreadOnStart: false, // use it only if you want to get all unread email on lib start. Default is `false`, 
            // mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
            attachments: true, // download attachments as they are encountered to the project directory 
            attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
        });

        mailListener.start();

        mailListener.on("server:connected", function () {
            console.log("Mail listener initialized");
        });

        mailListener.on("error", function (err: any) {
            console.log(err);
        });

        mailListener.on("server:disconnected", function () {
            console.log("Mail Listener disconnected!");
        });

        mailListener.on("mail", function (mail: any, seqno: any) {
            console.log(mail);
            console.log(seqno);
        });



        // const randomString = await CommonPageHelper.getRandomString(5);
        // // const email = 'test' + randomString + '@mailinator.com';
        // const email = `dhruvpatel.2694+${randomString}@gmail.com`
        // const company = 'testcomp_' + randomString;
        // loginPageHelper.clickSignupLink();
        // signupPageHelper = new SignupPageHelper();
        // signupPageHelper.signUp(email, randomString, randomString, SignupPageConstant.phoneNumber, SignupPageConstant.alternatePhoneNumber, company, randomString, SignupPageConstant.state, SignupPageConstant.password, SignupPageConstant.password);
        // dashboardPageHelper.verifySignupSuccessMessage(email);
        // console.log(email);

        // var deferred = protractor.promise.defer();
        // console.log("Waiting for an email...");

        // await mailListener.on("mail", function (mail: any) {
        //     console.log('mail', mail);
        //     deferred.fulfill(mail);
        // });

        // await deferred.promise.then((val: any) => {
        //     console.log(val.text);
        //     expect(val.subject).toEqual("Remote Counsel: Please activate your new account");
        //     expect(val.headers).toEqual("myemail@email.com");
        // });
        

            // extract registration code from the email message
            // var pattern = /Registration code is: (\w+)/g;
            // var regCode = pattern.exec(val.text)[1];

            

            // console.log(regCode);
    });

});
