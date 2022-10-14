describe("Get elements", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/agent-search");
  });

  // 一、当查找的元素包含文本，且页面唯一存在，建议使用  cy.contains('xxx')
  it('Find and click on "List & Map"', () => {
    cy.contains("List & Map").click();
  });
  // 二、当查找元素有唯一的 data-tn，建议使用 cy.get('[data-tn=”xxx”]')
  it('Find and click on "Complex Omnibox"', () => {
    cy.get('[data-tn="complexOmnibox-inputContainer"]').click();
  });
  // 三、当查找元素没有 data-tn，但是存在 id，建议使用 cy.get('#xxx')
  it('Find and click on "List"', () => {
    cy.get("#tab-link-results").click();
  });
  // 四、当查找元素没有 id，但是存在唯一 class，建议使用 cy.get('.xxx')
  it.only("Find and enable Debug Mode", () => {
    cy.contains("Preferences").click();
    cy.get('[data-tn="agentSearch-userSettingsModal-tab--DebugMode"]').click();
    cy.get(".cx-switch-slider").click();
  });
});
