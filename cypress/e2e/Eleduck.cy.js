describe('Dev-QA Homework', () => {
    before(function () {
        //定位到百度首页
        cy.visit('https://eleduck.com/');
        cy.title().should('contain', '电鸭社区');
    })

    it('SearchEduck', () => {
        cy.get('.ant-input').type('测试开发');
        cy.wait(1000);
        cy.get('.ant-input-search-button').click();
        cy.contains('我是小超人~')
            .parent().prev().parent().prev().click();
        //cy.contains('自动化测试');
        cy.url().should('include', 'posts/x0f9vQ')
        cy.get('.ant-card-body').should('contain', '自动化测试')
    })
})


