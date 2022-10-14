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

Cypress.Commands.add("login",() => {
        cy.request('POST', 'api/v3/authentication/credential/login', {
            email: 'zyw+cypress@compass.com',
            password: 'Zywlucine0909',
            //返回参数必备
            returnPerson: true,
        }).then((response) => {
            //expect(response.status).to.eql(200)
            //setcookie后，发送请求时，后端会通过这个remember_token_staging，确认已经登录
            cy.setCookie('remember_token_staging',response.body.authenticationToken);
        })
        cy.visit("/app/agent-search")
});