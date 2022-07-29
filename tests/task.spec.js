const { test, expect } = require('@playwright/test');

const { SignInPage } = require('../page/signin.page.js')

// const config = {
//     reporter: [['allure-playwright', {
//       detail: true,
//       outputFolder: 'allure-results',
//       suiteTitle: false
//     }]],
//   };



test('Trainee Task Case 1', async ({ page }) => {
    await page.goto('https://www.redmine.org/')
    //await page.pause()
    await page.locator('[href="/login"]').click()
    //await page.pause()
    await page.locator('[id="username"]').fill('Sne1324')
    //await page.pause()
    await page.locator('[id="password"]').fill('1234test@!')
    //await page.pause()
    await page.locator('[name="login"]').click()

});

test('Trainee Task Case 2', async ({ page }) => {

    // await page.goto('https://www.redmine.org/')
    // await page.locator('[href="/login"]').click()
    // await page.locator('[id="username"]').fill('Sne1324')
    // await page.locator('[id="password"]').fill('1234test@!')
    // await page.locator('[name="login"]').click()

    const signInPage = new SignInPage(page)
    await signInPage.signin(); 

    await page.locator('[href="/projects/redmine/issues/new"]').click()
    await page.locator('[id*="issue_tracker_id"]').click()
    await page.locator('[id*="issue_tracker_id"]').selectOption('3')
    //await page.pause()
    await page.locator('[id="issue_subject"]').fill('test')
    await page.locator('[class="wiki-edit"]').fill('It is just only test')
    await page.locator('[id="issue_status_id"]').click()
    await page.locator('[id="issue_category_id"]').selectOption('10')
    //
    
    await page.locator('[name="commit"]').click()

    expect(page.locator('//h3[text()="test"]')).toBeVisible

});

test('Trainee Task Case 3', async ({ page }) => {

    // await page.goto('https://www.redmine.org/')
    // await page.locator('[href="/login"]').click()
    // await page.locator('[id="username"]').fill('Sne1324')
    // await page.locator('[id="password"]').fill('1234test@!')
    // await page.locator('[name="login"]').click()

    const signInPage = new SignInPage(page)
    await signInPage.signin(); 

    await page.locator('[class="issues"]').click()
    await page.locator('[id="add_filter_select"]').click()
    await page.locator('[id="add_filter_select"]').selectOption('subject')
    //await page.pause()
    expect(page.locator('[id="values_subject"]')).toBeVisible
    await page.locator('[id="values_subject"]').fill('JavaScript')
    await page.keyboard.press('Enter')
    await page.locator('//*[contains(text(),"32899") and @href="/issues/32899"]').click()
    expect(page.locator('//h2')).toBeVisible


})

test('Trainee Task Case 4', async ({ page }) => {

    // await page.goto('https://www.redmine.org/')
    // await page.locator('[href="/login"]').click()
    // await page.locator('[id="username"]').fill('SneTest')
    // await page.locator('[id="password"]').fill('1234test@!')
    // await page.locator('[name="login"]').click()
    const signInPage = new SignInPage(page)
    await signInPage.signin(); 

    await page.locator('[class="repository"]').click()
    await page.locator('[href$="sandbox"]').click()
    await page.locator('[href$="ajax_upload"]').click()
    await page.locator('[href$="ajax_upload/doc"]').click()
    await page.locator('[href$="README_FOR_APP"]').click()


    const [download] = await Promise.all([

        page.waitForEvent('download'),

        page.locator('[href$="raw/sandbox/ajax_upload/doc/README_FOR_APP"]').click(),
    ]);

    console.log(await download.path());

    await download.saveAs('/Users/snigu/Downloads/file.txt');

    await page.pause()

})

test('Trainee Task Case 5', async ({ page }) => {

    // await page.goto('https://www.redmine.org/')
    // await page.locator('[href="/login"]').click()
    // await page.locator('[id="username"]').fill('SneTest')
    // await page.locator('[id="password"]').fill('1234test@!')
    // await page.locator('[name="login"]').click()

    const signInPage = new SignInPage(page)
    await signInPage.signin(); 
    

    await page.locator('[href="/logout"]').click()
    expect(page.locator('[href="/login"]')).toBeVisible

})


// test('Trainee Task Case TEST', async ({ page }) => {
//     const signInPage = new SignInPage(page)
// await signInPage.signin(); 

// })


