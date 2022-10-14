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


//添加了 indexdb plugin，用来每次测试前清除 indexdb
import '@this-dot/cypress-indexeddb';

// Cypress.Commands.add("login", () => {
//     //每次执行的时候，用于清除agent-search indexdb
//     cy.clearIndexedDb('agent-search');
//     //访问首页
//     cy.visit("/");
//     //点击包涵  “Register/Sign In”登录元素
//     cy.contains("Register/Sign In").click();
//     //点击登录选项
//     cy.contains("Other").click();
//     //通过css选择器获取元素在输入账号
//     cy.get('input[name = "email"]').type("lili.luo.tancypress@compass.com", { delay: 100 });
//     //点击登录元素按钮
//     cy.contains("Continue").click();
//     //通过css选择器获取元素在输入密码
//     cy.get('input[name="password"]').type("latiao1997@");
//     cy.get("#continue").click();
//     //TODO：优化为等待接口响应
//     cy.wait(1000);
//     cy.visit("/app/agent-search");
//     cy.contains("Try it now").click();
//     cy.get('[data-tn="agentSearch-modeSelectModal-sourceRadio-compass"]').click();
//     cy.contains("Next").click();
//     cy.reload();


// });
// 使用 api 快速登陆，并缓存登录信息
Cypress.Commands.add("login", () => {
    cy.session('agent', () => {
        // 使用 api 登陆
        cy.request('POST', 'api/v3/authentication/credential/login', {
            //输入账号密码
            email: 'lili.luo.tancypress@compass.com',
            password: 'latiao1997@',
            // 需要有这个参数返回 token
            returnPerson: true,
        }).then((response) => {
            //保存token
            cy.setCookie('remember_token_staging', response.body.authenticationToken);
        });
    })
});