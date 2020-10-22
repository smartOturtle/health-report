fixture `Health report`
    .page `https://healthreport.zju.edu.cn/ncov/wap/default/index`;
test('My first test', async t => {
    let noRadio=' div:nth-child(2) > div:nth-child(2) > span:nth-child(1)'
    await t
        .typeText('#username', process.env.username)
        .typeText('#password',process.env.password)
        .click('#dl')
        .click('[name="sfzx"]'+noRadio)
        .click('[placeholder="点击获取地理位置 Click to get geographic location"]')
        .click('.wapat-btn-ok')
        .click('.hcqbtn-danger').click(`[value="${process.env.province}"]`)
        .click('.hcqbtn-warning').click(`[value="${process.env.city}"]`)
        .click('.hcqbtn-primary').click(`[value="${process.env.county}"]`)
        .click('[name="sfymqjczrj"]'+noRadio)
        .click('[name="sfqrxxss"]')
        .click('.footers > a:nth-child(1)');
});