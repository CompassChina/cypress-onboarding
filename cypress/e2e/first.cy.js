describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.compass.com/')
    cy.get('#location-lookup-content-wrapper').type("Discovery Bay, CA");
    cy.wait(500);
    cy.get('#location-lookup-search').click();
    cy.get('.uc-lolCardView').contains('Discovery Bay, CA').should('be.visible');
  })
})