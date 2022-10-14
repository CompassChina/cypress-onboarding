describe('Eleduck',() => {
    it('Eleduck-spec',() => {
        cy.visit('https://eleduck.com/')
        cy.get('.app-menu-search').type('测试开发')
        cy.get('.ant-input-group-addon').click()
        
        cy.get('.ant-card-body')
        .contains("我是小超人~")
        .parents('.body')
        .children('.post-title')
        .children("a")
        .click()
    
        cy.get('.ant-card-body').should('contain','自动化测试')
    })
})