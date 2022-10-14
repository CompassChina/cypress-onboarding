describe('eleduck', () => {
    //访问电鸭首页
    it('home',() => {
         cy.visit('https://eleduck.com/');
    }) 
    //搜索测试开发
    it('Search',()=>{
        cy.get('.ant-input').type('测试开发');
        cy.get('.ant-input-group-addon > .ant-btn').click();
        cy.get("a:contains('我是小超人~')").parents('.body').children('.post-title').children("a").click();
        cy.get('.post-contents').should('include.text','自动化测试');
    })


});