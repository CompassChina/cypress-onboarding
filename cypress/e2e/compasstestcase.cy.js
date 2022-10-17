describe('Bright', () => {
  beforeEach(() => {
    cy.login()
    cy.visit("/app/agent-search/")
    //switch to bright panel
    cy.get('.top-bar-right').contains('Preferences').click();
    cy.get('[data-tn="agentSearchSettings-source-bright"]').click();
    cy.get('.cx-modal-closeIcon').click();
    cy.wait(500);
  });

  it('verify Property Type with applied results', () => {
    cy.get('[data-tn="PropertyType"]').within(() => {
      cy.get('.uc-downshiftTypeahead-dropdownButton').click();
      cy.contains("Select All").click();
    });
    cy.get('[data-tn="applied-criteria-button"]').click();
    //compare applied and property type value 
    let appliedCriteriaPanel;
    cy.get('.appliedCriteriaPanel-body').should(($div) => {
      appliedCriteriaPanel = $div.text();
    });
    cy.get('[data-tn="PropertyType"]').within(() => {
      cy.get('[data-tn="mlsSearchFilters-downshiftTypeaheadSelectedItem"]').should(($div) => {
        const PropertyType = $div.text();
        expect(appliedCriteriaPanel).to.include(PropertyType);
      });
    });
  });


  it('Use MLS Number', () => {
    cy.get('[data-tn="filters-viewListingsBtn"]').click();
    cy.wait(500);
    cy.get('[data-tn="results-table--sort-header-btn"]').first().click();
    cy.wait(2000);
    //选择一个ID，复制到mls number filter里面；
    cy.get(".results-table-externalId").first()
      .then(($div) => {
        cy.get(".as-toggleCriteria-button").click();
        cy.wait(500);
        cy.get('.uc-mls-block--MLSNumber').type($div.text());
        cy.get('[data-tn="filters-viewListingsBtn"]').click();
        cy.get(".results-table-externalId").should("have.length", 1).and("have.text", $div.text());

      });
    });


    it.only('verify the active filter results',() => {
      cy.get('[data-tn="applied-criteria-button"]').click();
      cy.get('[data-tn="filters-clearFilters"]').contains('Clear all').click();
      cy.wait(500);
      cy.get('[data-tn="mlsSearchFilters-checkbox-Active"]').click();
      cy.get('[data-tn="filters-viewListingsBtn"]').click();
      cy.wait(500);
      //断言status返回的24条结果都为Active
      cy.get('[data-tn="results-table-columnid-listingDetailsStatus"]')
      .each($status => {
      const status = $status.text();
        expect(status.toUpperCase()).to.eq('ACTIVE');
      });

    });
  }); 
  
