// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// 添加 indexdb plugin，用来每次测试前清除 indexdb
import "@this-dot/cypress-indexeddb";

// 使用 API 快速登录，并缓存登录信息
Cypress.Commands.add("login", () => {
  // cy.session() 使用场景：
  // 1. beforeEach() 中写了 cy.login，多个测试用例中，只有一次是真正登录，剩余的都是恢复缓存，节省时间；
  // 2. 在同个测试用例中切换账户，无需登出，直接登录即可。
  // 由于页面在每个测试用例执行前被清除，因此必须在每个测试用例中显示调用 cy.visit()，以访问应用程序中的页面。
  cy.session("agent", () => {
    cy.clearIndexedDb("agent-search");
    cy.visit("/");
    cy.contains("Register/Sign In").click();
    cy.contains("Other").click();
    cy.get('input[name = "email"]').type("yiwen.tancypress@compass.com");
    cy.contains("Continue").click();
    cy.get('input[name = "password"]').type("Tyw19961208@");
    cy.get("#continue").click();
    cy.wait(1000);
    cy.visit("/app/agent-search");
    cy.contains("Try it now").click();
    cy.get(
      '[data-tn="agentSearch-modeSelectModal-sourceRadio-compass"]'
    ).click();
    cy.contains("Next").click();
    cy.reload();
  });
});
