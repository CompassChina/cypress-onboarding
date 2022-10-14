describe('Baidu', function () {

    beforeEach(function () {
      // 执行每条用例前，重定位到百度首页
      cy.visit('http://www.baidu.com/');
    });

    context('是否包含贴吧', () => {
         // should断言包含贴吧 
      it('should', () => {
        cy.get('#s-top-left').should('be.visible').and('include.text','贴吧')
      });
  
      // expect断言包含贴吧 
      it('expect',()=>{
        cy.get('#s-top-left').then(($e)=>{
            expect($e.text()).to.include('贴吧');

        });
      });
       // assert断言包含贴吧 
     it('assert',()=>{
        cy.get('#s-top-left').then(($a)=>{
            assert.include($a.text(),'贴吧')

        });
      });
     
    })
  
  });