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

import '@this-dot/cypress-indexeddb';


Cypress.Commands.add("login", () => {
    cy.session('agent', () => {
        //使用 cy.session 来管理登录态
        cy.request('POST', 'api/v3/authentication/credential/login', {
            //post访问的方式，api=请求的网络地址
            email: 'qin.luo123@compass.com',
            password: 'cypress123',
            //email/password需要传的参数
            returnPerson: true,
        }).then((response) => {
            cy.setCookie('remember_token_staging', response.body.authenticationToken);
            //response.body.authenticationToken 保存的是 compass 的 token
            //response请求返回的数据如（status, body);
        });
    });
});