import { browser, ElementFinder, protractor } from 'protractor';

export class CommonPageHelper {
    private readonly EC = protractor.ExpectedConditions;

    /**
     * Navigated to the mentioned URL
     * @param url URL to navigate to
     * @returns control after navigation to the mentioned URL
     */
    protected async goTo(url: string) {
        browser.waitForAngularEnabled(false);
        return await browser.get(url);
    }

    /**
     * Gets user email from config
     */
    static get userOneEmail(): string {
        return browser.params.user1.email;
    }

    /**
     * Gets user password from config
     */
    static get userOnePassword(): string {
        return browser.params.user1.password;
    }

    /**
     * Waits for element to be visible
     * @param item: Element to wait for to be visible
     */
    public async waitTillElementIsVisisble(item: ElementFinder) {
        return browser.wait(this.EC.visibilityOf(item), 150000);
    }

    /**
     * Clicks on element passed
     * @param item: Item name to be clicked
     */
    public async click(item: ElementFinder) {
        browser.wait(this.EC.elementToBeClickable(item), 10000);
        return item.click();
    }

    /**
     * sets text in the element
     * @param item : Element to be sent values to
     * @param value : value to be sent
     */
    public async sendKeys(item: ElementFinder, value: string) {
        browser.wait(this.EC.elementToBeClickable(item), 8000);
        item.clear();
        return item.sendKeys(value);
    }

    /**
     * Maximize the window
     */
    public async maximizeWindow() {
        browser.manage().window().maximize();
    }

    static async getRandomString(stringLength: number) {
        let randomStr = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZqeytrpolkadjsghfgmnbzxcvnQPOWEYRKASJHDGFMNBCVX--___-_jsfhrlg-_124903564576986483658fgh4sdfh687e4h897WETHJ68F7G4688471877GFHJFFGJ87469857468746hfghwrtiyj4598yhdjkhgnk";
        for (let index = 0; index < stringLength; index++) {
            randomStr += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return randomStr;
    }

    static async getLastEmail() {
        var MailListener = require("mail-listener2");

        // here goes your email connection configuration
        var mailListener = new MailListener({
            username: "dhruvpatel.2694+2@gmail.com",
            password: "mzreexpqbczuznhx",
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
            fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
            mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
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


        var deferred = protractor.promise.defer();
        console.log("Waiting for an email...");

        mailListener.on("mail", function (mail: any) {
            deferred.fulfill(mail);
        });
        return deferred.promise;
    };


}
