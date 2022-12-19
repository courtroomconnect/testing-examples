import {browser, ElementFinder, protractor} from 'protractor';

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
    public async maximizeWindow(){
        browser.manage().window().maximize();
    }

    static async getRandomString(stringLength: number){
    let randomStr = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZqeytrpolkadjsghfgmnbzxcvnQPOWEYRKASJHDGFMNBCVX--___-_jsfhrlg-_124903564576986483658fgh4sdfh687e4h897WETHJ68F7G4688471877GFHJFFGJ87469857468746hfghwrtiyj4598yhdjkhgnk";
    for (let index = 0; index < stringLength; index++) {
      randomStr += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomStr;
    }
}
