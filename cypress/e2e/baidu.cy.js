describe('baidu', () => {
    it('Check tieba is exist in baidu nav', () => {
      // 访问 baidu
      cy.visit('https://www.baidu.com/');
      cy.get('a.mnav').should('contain', '贴吧');
      // then 用来处理获取元素后的回调
      cy.get('a.mnav').then($el => {
        expect($el).to.contain('贴吧');
        assert.exists($el.text(), '贴吧');
      })
    });
  });