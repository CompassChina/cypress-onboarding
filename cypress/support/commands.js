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

import '@this-dot/cypress-indexeddb';


//选择Other身份类型登录
Cypress.Commands.add('login1', (usernm1, pwd1) => {
    cy.session('Other', () => {
        // 每次执行的时候，清除agent-search indexdb
        cy.clearIndexedDb('agent-search');
        // 访问首页
        cy.visit('https://gamma.compass.com');
        // 点击包含‘Register/sign in’文本的元素
        cy.contains('Register/Sign In').click();
        cy.contains('Other').click();
        // 通过css选择器获取元素，输入账户密码
        cy.get('input[name = "email"]').type(usernm1)
        cy.contains('Continue').click();
        cy.get('input[name="password"]').type(pwd1);
        cy.get('#continue').click();
        //To do:优化为等待接口响应
        cy.wait(1000);
        //进入Bright panel
        cy.visit('/app/agent-search');
        cy.contains('Try it now').click();
        cy.get('[data-tn="agentSearch-mlsSelector-radio"]').click();
        cy.get('[data-tn="agentSearch-mlsSelector-radio-bright"]').click();
        cy.contains('Next').click();
        cy.wait(1000);
        cy.reload();    
    })
})


//选择Buyer or Seller身份类型登录
Cypress.Commands.add('login2', (usernm2, pwd2) => {
    cy.session('Buyer or Seller', () => {
        // 每次执行的时候，清除agent-search indexdb
        cy.clearIndexedDb('agent-search');
        // 访问首页
        cy.visit('https://gamma.compass.com');
        // 点击包含‘Register/sign in’文本的元素
        cy.contains('Register/Sign In').click();
        cy.contains('Buyer or Seller').click();
        cy.contains('Continue with Email').click();
        cy.get('input[name = "email"]').type(usernm2)
        cy.contains('Continue').click();
        cy.get('input[name="password"]').type(pwd2);
        cy.get('#continue').click();
        //To do:优化为等待接口响应
        cy.wait(1000);
        cy.get('[data-tn="homepage-heroTitle-branded"]').should('exist')

    })
})

//使用cy.request 快速登录 agent search
Cypress.Commands.add('login3', (usernm3, pwd3) => {
    cy.request('POST', 'api/v3/authentication/credential/login', {
        returnPerson: true,
        email: usernm3,
        password: pwd3
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.setCookie('remember_token_staging', response.body.authenticationToken);
    })
})



