describe('Baiduopen', () => { 
beforeEach(function () {
  cy.visit('https://www.baidu.com/')
});

context('assert that navbar contains tiebar', () => {
it('Use should',() => {
  cy.get("a:contains('贴吧')").should('be.visible');
  //a叛定条件是否存在,should断言
});

it('Use expect', () => {
cy.get('#s-top-left').children("a:contains('贴吧')").then(($div) => {
  expect($div.text()).to.include('贴吧')
});
})
  //expect导航条包含贴吧

it('Use assert', () => {
  cy.get('#s-top-left').children("a:contains('贴吧')").then(($div) => {
    assert.include($div.text(),'贴吧')
  });
  //assert导航条包含贴吧
})
})
})

describe.only('Baidu', function () {
  beforeEach(function () {
 });
  it('search',() => {
    cy.visit('https://www.baidu.com/',{timeout: 100000});
  });
  it('search 中国', () => {
  cy.get('#kw').type ("中国");
  cy.get('#su').click();
  cy.get('#container').contains('中国').should('be.visible');
  })
})
describe.skip('Baidu',function () {
  //测试模块：导航条，搜索功能，百度热搜...
beforeEach(function () {
  cy.visit('https://www.baidu.com/')
  //执行每条用例前，重定位到百度首页
})

context('navbar',() => {
  //导航条
 it('显示的菜单为：新闻,hao123,地图，贴吧，视频，图片，网盘', () => {
 })
})

context('inputsearch',() => {
  //搜索功能
 it('search keyword',() => {
//搜索关键词

  })
})
context('Baidu Hot Search',() => {
  //百度热搜
 it('BaiduHotSearch',() => {
 //定位到百度热搜
  })
})
})

