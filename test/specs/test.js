const assert = require('assert');
describe('Authorization', async () => {
    await it('should login with email and check the file title', async () => {
        await browser.url('https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0')

       /* let choose_user = await $('/*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[2]/div/div[1]/div')
        await choose_user.click();*/
        let name = 'yurko.viktoria@gmail.com';
        let password = '1985666666mobi';

       let name_imput = await $('#identifierId')
       await name_imput.setValue(name);

        let next_btn = await $('#identifierNext');
        await next_btn.waitForClickable();
        await next_btn.click();

        let passord_imput = await $('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
        await passord_imput.setValue(password);

        let button_go = await $('[@id="passwordNext"]/div');
        await button_go.waitForClickable();
        await button_go.click();

        let log_in_btn = await $('#passwordNext');
        await log_in_btn.waitForClickable();
        await log_in_btn.click();
    });
})