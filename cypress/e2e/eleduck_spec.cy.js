describe("Eleduck", () => {
  it("Find and browse the post", () => {
    // cy.viewport(width,height)
    cy.viewport(1350, 759);
    cy.visit("https://eleduck.com/ ");
    cy.get(".app-menu-search .ant-input").type("测试开发");
    cy.get(".app-menu-search .ant-input-group-addon").click();
    cy.wait(500);
    cy.get(".ant-card-body .post-list .post-item")
      .contains("我是小超人~")
      // 获取“我是小超人~“的父级元素 info
      // 再获取父级元素的同级元素 title
      // 通过父子关系层级定位，获取子元素
      .parents(".meta-info")
      .siblings(".post-title")
      .find("a")
      .click();
    cy.get(".post-contents").should("include.text", "自动化测试");
  });
});
