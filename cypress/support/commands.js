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
//import { post } from 'cypress/types/jquery';

Cypress.Commands.add("login", () => {

    cy.session("agent", () => {
        cy.request('post','api/v3/authentication/credential/login', {
        email: 'you.yang+cypress@compass.com',
        password: 'Ykf47620',
        returnPerson: true,
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.setCookie('remember_token_staging', response.body.authenticationToken);
    });
        
    })

});