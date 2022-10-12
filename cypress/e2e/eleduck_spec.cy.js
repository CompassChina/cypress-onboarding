describe('Open the job post on eleduck',() =>{
    beforeEach(() => {
       cy.viewport(1400,1000);
    });

    it('finds and opens the job post', () =>{
        cy.visit('https://eleduck.com/');
        cy.screenshot();
        cy.get('.app-menu-search').type('测试开发{enter}');
        cy.get('.app-content').should('contain','为您找到以下内容');
        cy.contains('我是小超人~').parents('.body').eq(0).find('.post-title a').click();
        cy.get('.app-content').then($content => {
            expect($content).to.contain('自动化测试');
        });
    });
});