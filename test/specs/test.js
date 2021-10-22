const assert = require('assert');
describe('Authorization', async () => {
    await it('should login with email and check the file title', async () => {

        let name = 'yurko.viktoria@gmail.com';
        let password = '1985666666mobi';

        await browser.url('https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0')

        let name_imput = await $('#identifierId')
       await name_imput.setValue(name);

        let next_btn = await $('#identifierNext');
        await next_btn.waitForClickable({ timeout: 3000 });
        await next_btn.click();


        let reapitButton = await $('#next');
        await reapitButton.waitForClickable();
        await reapitButton.click();


        let name_reapit = await $('#identifierId');
        await name_reapit.setValue(name);



        let next_btn_reapit = await $('#identifierNext');
        await next_btn_reapit.waitForClickable({ timeout: 3000 });
        await next_btn_reapit.click();


        await browser.url('https://support.google.com/accounts/answer/7675428?hl=ru');

        let text = await $('/html/body/div[2]/div/section/div/div[1]/article/section/h1');
        let value = await text.getText();
        await assert.deepStrictEqual(value, 'Как войти в аккаунт в поддерживаемом браузере', 'YES');

    });
});

