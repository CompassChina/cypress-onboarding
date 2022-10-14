describe('Findelement',()=> {
    before(()=>{
        cy.login();
    })

  //Hide criteria按钮
  it('使用文本',()=>{
    cy.contains('Hide criteria').click();
  })
  
  //左上角切换workflow按钮
  it('使用data-tn',()=>{
    cy.get('[data-tn="workflow-flyout-btn"]').click();
  })

  //右上角list视图切换按钮
  it('使用id',()=>{
    cy.get('#tab-link-results').click();
  })

  //pill按钮
  it('使用class',()=>{
    cy.get('.uc-dotIcon--gray').click();
  })
})