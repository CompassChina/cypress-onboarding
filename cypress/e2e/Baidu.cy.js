describe('OpenBaidu', function () {
  beforeEach(function () {
    //执行每条用例前，重定位到百度首页
    cy.visit('http://wwww.baidu.com/', { timeout: 50000 })
    cy.title().should('contain', '百度一下，你就知道')
  });

  context('Homework1',function(){
    it('searchChina', () => {
      //输入’中国‘，断言查询结果页包含文本关键字
      cy.get('#kw').type('中国');
      cy.wait(1000);
      cy.get('#su').click();
      cy.wait(5000);  //手动操作百度安全验证
      cy.get('[id="1"]').should('contain', '中国');
    })

    it('specialSymbol', () => {
      //输入特殊符号’@‘，断言查询结果页包含该特殊字符
      cy.get('#kw').type('@');
      cy.wait(1000);
      cy.get('#su').click();
      cy.wait(5000);  //手动操作百度安全验证
      cy.get('[id="1"]').should('contain', '@');
    })

    it('searchYLP', () => {
      //输入名字'袁隆平'查询， 并进入到百度百科详情页，断言是否包含‘杂交水稻之父’
      cy.get('#kw').type('袁隆平');
      cy.wait(1000);
      cy.get('#su').click();
      cy.wait(5000);  //手动操作百度安全验证
      cy.get('[id="1"]').click({ multiple: true });
      //断言是否打开了新tab
      cy.contains('袁隆平').should('have.attr', 'target', '_blank');
      //cy.then()
    })
  })
  
  context('Homework-Command',()=>{
      it('Command-parent',()=>{
        cy.get('.hot-refresh-text');
        cy.should('be.visible').and('have.text','换一换');    
      });

      it('Command-filter',()=>{
        cy.get('li').filter('.hotsearch-item odd',{timeout: 50000}).eq(1).click();
      });

      it('Type&Clear',()=>{
        cy.get('#kw').type('abcdefg');
        cy.wait(1000);
        cy.get('#kw').clear();
      })
  })
    
  context.only('Homework-Assertion',()=>{
      it('Use should',()=>{
        cy.get('#head').children('#s-top-left')
          .should('be.visible').and('include.text','贴吧')
      })

      it('Use Expect',()=>{
        cy.get('#head').children('#s-top-left').then(($x)=>{
          expect($x.text()).to.include('贴吧')
        })
      })

      it('Use Assert',()=>{
        cy.get('#head').children('#s-top-left').then(($x)=>{
          assert.include($x.text(),'贴吧')
        })
      })
  })

  })
