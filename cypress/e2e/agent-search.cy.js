describe('Agent Search', () => {
  
  beforeEach('Login to agent search', () => {
      cy.login();
      cy.visit('/app/agent-search/');
  });
  //访问recent searches, 页面中唯一的文本， cy.contains('XXX')
  it('Recent searches', () => {
    cy.contains('Recent searches').click();
  });

  //data和 class的使用 
  it('点击Coming soon', () => {
    cy.get('[data-tn="Listing-Active-checkbox-Coming Soon"]').click();
    cy.wait(1000);
    //.within(() => {cy.get('.cx-checkboxField uc-checkbox cx-formElement')}).click();
    cy.contains('View listings').click();
  });

  it('设置agent_roles', () => {
    cy.contains('Preferences').click();
    cy.contains('Agent Roles').click();
    cy.contains('Agent_aspen').click();
    cy.wait(1000);
    //cy.get('[data-tn="agentSearch-userSettingsModal-content"]').click();
    //.within(() => {cy.get('.cx-checkboxField uc-checkbox cx-formElement')}).click();
  });

});