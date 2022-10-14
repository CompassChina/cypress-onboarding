describe('eleduck', () => {
  
    it('Visit eleduck', () => {
        cy.visit('https://eleduck.com/');
        cy.wait(800);
    });

    it('search keywords "测试开发"', () => {
        cy.get(' input[placeholder="请输入关键字"]').type('测试开发').type('{enter}');
    });
  
    
    it('Look for the post', () => {
        cy.contains('「南京/远程」继续求 Rust/Golang/前端/测试/文档工程师/DBA工程师').click();
    });
  
    it('Open the post and verify it has the content 自动化测试', () => {
        cy.get('.app-content > :nth-child(1) > .ant-card-body').should('include.text', '自动化测试');
    });
  
  });