describe('get element', () => {
  before(() => {
  cy.login();
});

    
it('contains element', () => {
  //cy.contains获取元素
  cy.contains("Quick Filter").click();
});

it('data-tn element view listing',() => {
  //查找元素有唯一的 data-tn，建议使用 cy.get
  cy.get('[data-tn="filters-viewListingsBtn"]').click();
});

it('id# element List', () => {
  //查找元素没有 data-tn，但是存在 id
  cy.get('#tab-link-results').click();
});

it('within element Transaction Type', () => {
  //定位的父级元素，然后再用 withIn 来找该元素
  cy.get('[data-tn="TransactionType"]').within(() => {
  cy.get('.uc-downshiftTypeahead-dropdownButton');
  });
});

it('property type', () => {
  //
  cy.get('[data-tn="PropertyType"]').within(() => {
    cy.get('.uc-downshiftTypeahead-dropdownButton');
  });
    cy.get('#downshift-1-toggle-button').click();
  
});
});
