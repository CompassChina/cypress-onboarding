describe('Recruitment Dev-QA Homework', () => {
  it('search job', () => {
    cy.visit('https://eleduck.com/ ');
    cy.viewport(1320,720);
    cy.get('.app-menu-search').type('测试开发');
    cy.wait(500);
    cy.get('.ant-input-group-addon').click();
    cy.wait(500);
    cy.get("a:contains('我是小超人')").parents(".body").children(".post-title").children("a").click();
    cy.get('.post-contents').contains('自动化测试').should('be.visible');
  })

})