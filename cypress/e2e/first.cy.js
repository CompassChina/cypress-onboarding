// describe('compass', () => {
//   it('search', () => {
//     // 访问 cypress
//     cy.visit('https://www.compass.com/', {timeout: 400000 });
//     // 输入框，搜索 Discovery Bay, CA
//     cy.get('#location-lookup-content-wrapper').type("Discovery Bay, CA");
//     // 添加一些延迟，等待接口返回，不然会搜索不出结果
//     cy.wait(500);
//     // 点击搜索按钮
//     cy.get('#location-lookup-search').click(); 
//     // 检测返回的房产 cards 中有对应的结果
//     cy.get('.uc-lolCardView').contains('Discovery Bay, CA').should('be.visible');
//   })
// })

// describe('Baidu', function () {
//   beforeEach(function () {
//       // 执行每条用例前，重定位到百度首页
//       cy.visit('http://www.baidu.com/', {timeout: 400000 }).reload();
//     });
//   it('中国', () => {
//     // 输入文本'中国'查询，断言查询结果页要包含输入的文本关键字
//     cy.get('#kw').type("中国");
//     // 点击搜索按钮
//     cy.get('#su').click(); 
//     // 添加一些延迟，等待接口返回。
//     cy.wait(15000);
//     // 断言 中国 元素可见
//     cy.contains('中国').should('be.visible');
//   });
//   it('@', () => {
//     // 输入特殊符号’@‘查询， 断言查询结果页要包含该特殊字符
//     cy.get('#kw').type("@");
//     // 点击搜索按钮
//     cy.get('#su').click(); 
//     // 添加一些延迟，等待接口返回。
//     cy.wait(15000);
//     // 断言 @ 元素可见
//     cy.contains('@').should('be.visible');
//   });
//   it('袁隆平', () => {
//      // 输入名字'袁隆平'查询， 并进入到百度百科详情页
//      cy.get('#kw').type("袁隆平");
//      // 点击搜索按钮
//      cy.get('#su').click(); 
//      // 添加一些延迟，等待接口返回。
//      cy.wait(500);
//      //进入到百度百科详情页
//      cy.contains('百度百科').invoke('removeAttr', 'target').click();
     
//       });
// });

describe('Baidu', function () {
  beforeEach(function () {
    // 执行每条用例前，重定位到百度首页
    cy.visit('http://www.baidu.com/');
  });
  //导航条模块
  context('导航条', () => {
    // 断言导航栏是否包含新闻、hao123、地图、贴吧、视频、图片、网盘,更多选项。
    it('显示的菜单为：新闻、hao123、地图、贴吧、视频、图片、网盘', () => {
      cy.contains('#s-top-left','新闻','hao123','地图','贴吧','视频','图片','网盘','更多').should('be.visible');
    });
    //依次跳转页面
    it('点击新闻', () => {
      cy.contains('新闻').click();
    });
    it('点击hao123', () => {
      cy.contains('hao123').click();
      
    });
    it('点击地图', () => {
      
      cy.contains('地图').click();
      
    });
    it('点击贴吧', () => {
      cy.contains('贴吧').click();
      
    });
    it('点击视频', () => {
      
      cy.contains('视频').click();
      
    });
    it('点击图片', () => {
      cy.contains('图片').click();
      
    });
    it('点击网盘', () => {
      
      cy.contains('网盘').click();
    });   
    it('点击更多', () => {
      cy.contains('更多').click();
    });
  })



  //热搜模块
  context('热搜', () => {
    //点击百度热搜选项可以跳转到热搜页面
    it('可以正常跳转热搜', () => {
      // 点击热搜
      cy.get('.title-text > :nth-child(1)').invoke('removeAttr', 'target').click();
      
    })
    //首页显示固定几条热搜数据，能够选择目的热搜跳转
    it('首页显示几条热搜数据', () => {
      cy.visit('http://www.baidu.com/', {timeout: 400000 }).reload();
      // 点击对应热搜跳转
      cy.get('.title-text > :nth-child(1)').invoke('removeAttr', 'target').click();
      
    })
    //点击换一换按钮内容能够刷新
    it('换一换', () => {

      // 点击换一换
      cy.get('.hot-refresh-text').invoke('removeAttr', 'target').click();
      
    })
    
  })



  //搜索模块
  context('搜索', () => {
   //进行人物搜索并能进入详情介绍页面
    it('袁隆平', () => {
      // 输入名字'袁隆平'查询， 并进入到百度百科详情页
     cy.get('#kw').type("袁隆平",{ delay: 500 });
      // 点击搜索按钮
     cy.get('#su').click(); 
      // 添加一些延迟，等待接口返回。
      cy.wait(500);
      //进入到百度百科详情页
      cy.contains('百度百科').invoke('removeAttr', 'target').click();
      })
    //输入内容之后可以正常清空输入内容
    it('袁隆平', () => {
      cy.get('#kw').type("袁隆平",{ delay: 500 }).clear();
        
      })


})
});