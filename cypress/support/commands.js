// 添加 indexdb plugin，用来处理 indexdb
import '@this-dot/cypress-indexeddb';

// 使用 api 快速登陆，并缓存登录信息
Cypress.Commands.add("login", () => {
    cy.session('agent', () => {
        // 使用 api 登陆
        cy.request('POST', 'api/v3/authentication/credential/login', {
            email: 'doudou.lv@compass.com',
            password: 'dou880214',
            // 需要有这个参数才会返回 token
            returnPerson: true,
        }).then((response) => {
            cy.setCookie('remember_token_staging', response.body.authenticationToken);
        });
    })
});

// 直接修改 indexdb，设置测试面板
Cypress.Commands.add("setPanel", (panel) => {
    cy.openIndexedDb('agent-search').as('agentSearchDb');
    cy.getIndexedDb('@agentSearchDb').createObjectStore('user').as('agentSearchDbUser');
    cy.getStore('@agentSearchDbUser').createItem('preferences', { 
        hasCompletedOnboarding: true,
        sourceId: panel,
        workflow: 'SALES'
    });
});

// 访问 agent search
Cypress.Commands.add('accessAgentSearch', () => {
    cy.visit("/app/agent-search/");
});

// 等待 mls search 响应
Cypress.Commands.add('waitMlsSearch', () => {
    // TODO: 可优化为等待接口响应完成
    cy.wait(2000);
});

// 切换 panel
// Cypress.Commands.add('switchPanel', (panel) => {
//     cy.get('[data-tn="agentSearch-userSettingsButton"]').click();
//     cy.get('[data-tn="agentSearch-userSettingsModal"]').within(() => {
//         cy.contains(panel).click();
//     });
//     // TODO: 可优化为等待接口响应完成
//     cy.wait(2000);
//     cy.get('.cx-modal-closeIcon').click();
// });