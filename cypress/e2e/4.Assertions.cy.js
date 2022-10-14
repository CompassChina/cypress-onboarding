describe('Assert that the nav bar contains "贴吧"', function () {
  beforeEach(function () {
    cy.visit("http://www.baidu.com");
  });
  it('Use "sholud" to assert', () => {
    cy.get("#s-top-left").should("be.visible").and("include.text", "贴吧");
  });

  it('Use "expect" to assert', () => {
    // 回调函数，将函数传递给 .should()
    cy.get("#s-top-left").then(($el) => {
      expect($el).to.contain("贴吧");
    });
  });

  it('Use "assert" to assert', () => {
    cy.get("#s-top-left").then(($el) => {
      assert.exists($el.text(), "贴吧");
    });
  });
});
