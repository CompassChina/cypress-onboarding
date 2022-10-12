describe('Agent Search', () => {
  // 每次执行测试用例前，调用封装的 commands 进行登录，忽略 onboarding，访问 agent search，切换到 bright panel 操作
  beforeEach(() => {
    cy.login();
    cy.setPanel('bright');
    cy.accessAgentSearch();
  });

  // 用例一：在 Bright panel 点击 Property Type 的 Select all 按钮，查看Applied 显示一致
  it('Verify the select all function of Property Type', () => {
    // 选中所有的 Property type
    cy.get('[data-tn="PropertyType"]').within(() => {
      cy.get('.uc-downshiftTypeahead-dropdownButton').click();
      cy.contains("Select All").click();
      cy.get('.uc-downshiftTypeahead-dropdownButton').click();
    });
    // 检测 Applied 显示的 Property type 正确
    cy.contains('Applied').click();
    cy.get('.appliedCriteriaPanel-body').within(() => {
      cy.contains('Property Type').should('be.visible');
      cy.contains('Farm').should('be.visible');
      cy.contains('Land').should('be.visible');
      cy.contains('Multi-Family').should('be.visible');
      cy.contains('Residential').should('be.visible');
    });
  })

// 用例二：使用 MLS Number 查询返回 Listing 匹配正确
it('Verify MLS Number return correct results', () => {
  cy.contains('Hide criteria').click();
  // 先排序，确保有可用的测试 ID
  cy.get('[data-rowid="externalId"]').within(() => {
   cy.get('[data-tn="results-table--sort-header-btn"]').click();
  })
  cy.waitMlsSearch();
  // 获取第一行数据的 ID 作为测试 ID
  cy.get('[data-tn="results-table-columnid-externalId"]').first().then($id => {
    const id = $id.text();
    cy.contains('Show criteria').click();
    cy.get('[data-tn="textInput-input-MLS Number"]').type(id);
    cy.contains('Hide criteria').click();
    cy.waitMlsSearch();
    // 获取搜索结果的 status，检测都为抽取的 id
    cy.get('[data-tn="results-table-columnid-externalId"]').each($resultId => {
      const resultId = $resultId.text();
      expect(resultId).to.eq(id);
    })
  })
  });
 

  // 用例三：选中 Active，验证 Result Table 返回的结果都匹配
  it('Verify Status return correct results', () => {
    // 清空默认 filter
    cy.contains('Clear all').click();
    // 选中 Active 进行筛选
    cy.get('[data-tn="mlsSearchFilters-checkbox-Active"]').click();
    cy.contains('Hide criteria').click();
    cy.waitMlsSearch();
    // 获取搜索结果的 status，检测都为 ACTIVE
    cy.get('[data-tn="results-table-columnid-listingDetailsStatus"]').each($status => {
      const status = $status.text();
      expect(status).to.eq('ACTIVE');
    });
  });
});