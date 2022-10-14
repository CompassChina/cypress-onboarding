describe('elements', () => {
    //登录
  beforeEach(function () {
        // 执行每条用例前，重新登录。
        cy.login();
        cy.visit("/app/agent-search");
    });
  //当查找的元素包含文本，且页面唯一存在，建议使用  cy.contains('xxx')
  it('唯一文本',()=>{
    //查看Results Table
    cy.contains("View listings").click();
  });
  //当查找元素有唯一的 data-tn，建议使用 cy.get('[data-tn=”xxx”]')
  it('唯一的 data-tn',()=>{
    //在MLS ID(s)输入数据
    cy.get('[data-tn="MLSIDs"]').type("data", { delay: 100 });
  });

  //当查找元素没有 data-tn，但是存在 id，建议使用 cy.get('#xxx')
  it('id',()=>{
    //查看List & Map Results Table
    cy.get('#tab-link-split').click();
  });

  //当查找元素没有 id，但是存在唯一 class，建议使用 cy.get('.xxx')
  it('唯一 class',()=>{
    cy.get('[data-tn="MLSIDs"]').type("data", { delay: 100 });
    //获取Save search面板所有数据
    cy.get('[data-tn="saveSearch"]').click();
    cy.get('.uc--saved-search-flyout-content');
  });
  
});