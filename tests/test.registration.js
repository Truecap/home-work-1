const { test, expect } = require('@playwright/test');

const { RandomEmailPage } = require('../page/random.email.page.js')

test('Trainee Task Case Registr', async ({ page }) => {

    const randomEmailPage = new RandomEmailPage(page);
    await randomEmailPage.goto(); 
    await randomEmailPage.copyEmail(); 
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/account/register"]').click();
    await page.locator('[id="user_login"]').fill('SneTest');
    await page.locator('[id="user_password"]').fill('1234test@!');
    await page.locator('[id="user_password_confirmation"]').fill('1234test@!');
    await page.locator('[id="user_firstname"]').fill('Test');
    await page.locator('[id="user_lastname"]').fill('Test1');
    //await page.pause()
    await page.locator('[id="user_mail"]').click()
    await page.keyboard.press('Control+V');
    await page.locator('[name="commit"]').click();
    await randomEmailPage.goto(); 
    await randomEmailPage.confirmEmail();
    await page.pause()






    
})
