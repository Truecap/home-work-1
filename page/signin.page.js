class SignInPage {
   
    constructor(page) {
      this.page = page;
      this.loginButon = page.locator('[href="/login"]');
      this.userInput = page.locator('[id="username"]');
      this.passwordInput = page.locator('[id="password"]');
      this.continueBuuton = page.locator('[name="login"]')
      
    }
    async signin() {
      await this.page.goto('https://www.redmine.org/');
   
      await this.loginButon.click(); 
      await this.userInput.fill('SneTest');
      await this.passwordInput.fill('1234test@!');
      await this.continueBuuton.click();
    }
  }
  module.exports = { SignInPage };

  