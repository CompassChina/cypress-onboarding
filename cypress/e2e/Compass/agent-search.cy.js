
describe('多方式登录',()=>{
    const usernm1 = 'jiayin.huang+cypress@compass.com'
    const pwd1 = 'Hjy930118'

    const usernm2 = 'consumer.test@mail.com'
    const pwd2 = 'consumer.test'

    const usernm3 = 'jiayin.huang+cypress@compass.com'
    const pwd3 = 'Hjy930118'

    it('使用other类型账户登录',()=>{
        cy.login1 (usernm1,pwd1);
        //cy.visit("app/agent-search");
    })

    it('使用Buyer or Seller类型账户登录',()=>{
        cy.login2 (usernm2,pwd2);
    })

    it('使用API登陆',()=>{
        cy.login3 (usernm3,pwd3);
    })
})
