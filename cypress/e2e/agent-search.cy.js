describe('Agent Search', () => {
    it('Login to agent search', () => {
        cy.login();
        cy.visit("/app/agent-search/")
    });


    it.skip('PropertyType applied checking', () => {
        cy.get('.top-bar-right').contains('Preferences').click();
        cy.get('[data-tn="agentSearchSettings-source-bright"]').click();
        cy.get('.cx-modal-closeIcon').click(); 
        cy.get('[data-tn="PropertyType"]').within(() => {
            cy.get('.uc-downshiftTypeahead-dropdownButton').click();
            cy.contains("Select All").click();
        })
    })
})
