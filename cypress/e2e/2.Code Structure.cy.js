describe("Baidu", function () {
  beforeEach(() => {
    cy.visit("http://www.baidu.com");
  });

  // 导航栏测试
  context.only("navbar", () => {
    // 新闻。确认时间是否为今天
    it("news", () => {
      cy.log("news");
    });
  });

  // hao123，网址确认
  it("hao123", () => {
    cy.log("hao123");
  });

  // 地图，聚焦
  it("map", () => {
    cy.log("map");
  });

  // ...
});
