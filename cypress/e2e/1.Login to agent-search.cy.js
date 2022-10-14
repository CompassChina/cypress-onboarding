describe("Agent Search", () => {
  it.only("Login to agent search", () => {
    cy.login();
    cy.visit("/app/agent-search/");
  });

  it("Login to agent search by API", () => {
    // cy.request(method,url,body)
    cy.request("POST", "api/v3/authentication/credential/login", {
      email: "yiwen.tancypress@compass.com",
      password: "Tyw19961208@",
      returnPerson: true,
    }).then((response) => {
      cy.setCookie("remember_token_staging", response.body.authenticationToken);
      // cy.setCookie(name,value)
      // 返回值的获取：response.xxx.xxx
      // 提示：获取到 token 之后，你需要存储到 cookies 的 remember_token_staging，这样 compass app 会以这个 cookie 作为登录态。
    });
    cy.visit("/app/agent-search");
  });
});
