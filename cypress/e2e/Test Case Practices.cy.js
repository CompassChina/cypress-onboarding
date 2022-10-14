describe("Bright panel", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/agent-search");
    // Switch to Bright panel
    cy.contains("Preference").click();
    cy.get('[data-tn="agentSearchSettings-source-bright"]').click();
    cy.get(".cx-modal-closeIcon").click();
  });

  context("Property Type", () => {
    it("Compare the label and value", () => {
      // Property Type -> Select All
      cy.get('[data-tn="PropertyType"]').within(() => {
        cy.get(".uc-downshiftTypeahead-dropdownButton").click();
        cy.contains("Select All").click();
      });
      // Compare the label and value
      cy.get('[data-tn="applied-criteria-button"]').click();
      cy.get(".appliedCriteriaPanel-body").then(($label) => {
        cy.get(
          '[data-tn="PropertyType"] [data-tn="mlsSearchFilters-downshiftTypeaheadControl"]'
        ).then(($value) => {
          expect($label.text()).to.include($value.text());
        });
      });
    });
  });

  context.only("MLS Number", () => {
    it("Verify the return of Listing ID", () => {
      // Sort Listing ID column to get valid data
      cy.get("#tab-link-results").click();
      cy.get(
        '[data-rowid="externalId"] [data-tn="results-table--sort-header-btn"]'
      ).click();
      cy.wait(2000);
      //Type the valid data into the input and filter it
      cy.get(".results-table-externalId")
        .first()
        .then(($ID) => {
          cy.get('[data-tn="ToggleCriteriaBtn"]').click();
          cy.get(".uc-mls-block--MLSNumber").type($ID.text());
          // Assertion: Only one listing will be returned and the text will be consistent
          cy.contains("View listings").click();
          cy.get(".results-table-externalId")
            .should("have.length", 1)
            .and("have.text", $ID.text());
        });
    });
  });

  context("Active", () => {
    it("Verify the status of 24 returned listings", () => {
      // Clear all & Active
      cy.contains("Clear all").click();
      cy.get('[data-tn="mlsSearchFilters-checkbox-Active"]').click();
      cy.contains("View listings").click();
      cy.get('[data-tn="results-table-columnid-listingDetailsStatus"]').each(
        ($status) => {
          const status = $status.text();
          // Assertion: The statis of all 24 listings is 'ACTIVE'
          expect(status.toUpperCase()).to.eq("ACTIVE");
        }
      );
    });
  });
});
