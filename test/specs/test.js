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

        await browser.debug()

        let passord_imput = await $('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
        await passord_imput.setValue(password);

        let button_go = await $('#passwordNext');
        await button_go.waitForClickable({ timeout: 3000 });
        await button_go.click();

        await assert.deepStrictEqual('Table for autotesting', 'Table for autotesting' , "title text = Table for autotesting");

        var textAut = await $('#docs-title-input-label-inner').getHTML();
        consol.log(textAut);
    });
})

