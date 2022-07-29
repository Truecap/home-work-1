class RandomEmailPage {
   
    constructor(page) {
      this.page = page;
      this.emaiCopyButton = page.locator('[onclick="return copyEmailToClipboard();"]');
      this.emailMessedgeButton = page.locator('//*[contains(@href,"/mailbox/?action=readMessageFull")]');
      this.confirmVutton = page.locator('//*[contains(@href,"https://www.redmine.org/account/activate"]');
      
    }

    async goto() {
    await this.page.goto('https://www.1secmail.com/');

    }
    async copyEmail() {
    await this.emaiCopyButton.click();
     
    }

    async confirmEmail() {
        await this.emailMessedgeButton.click();
        await this.confirmVutton.click();


         
        }
  }
  module.exports = { RandomEmailPage };