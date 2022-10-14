const { contains } = require("cypress/types/jquery");

describe('compass', () => {
  it('search', () => {
    // 访问 cypress
    cy.visit('https://www.compass.com/');
    // 输入框，搜索 Discovery Bay, CA
    cy.get('#location-lookup-content-wrapper').type("Discovery Bay, CA");
    // 添加一些延迟，等待接口返回，不然会搜索不出结果
    cy.wait(500);
    // 点击搜索按钮
    cy.get('#location-lookup-search').click(); 
    // 检测返回的房产 cards 中有对应的结果
    cy.get('.uc-lolCardView').contains('Discovery Bay, CA').should('be.visible');
  })
})



