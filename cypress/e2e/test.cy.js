describe('test', () => {
    beforeEach(() => {
        cy.log('test call');
    })

    context('logined', () => {
        beforeEach(() => {
            cy.log('logined call');
        })

        it('logined 1', () => {
        })

        it('logined 2', () => {
        })
    })

    context('unlogin', () => {
        beforeEach(() => {
            cy.log('unlogin call');
        })

        it('unlogin 1', () => {
        })

        it('unlogin 2', () => {
        })
    })
})