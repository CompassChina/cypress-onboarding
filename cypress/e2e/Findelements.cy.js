describe("Find elements",() => {

    //访问查看map模式下Barrington的Listings 
    it('使用map模式查看Barrington城市的listings',() => {
        //登陆
        cy.login();

        //选择
        cy.get('[data-tn="City - City"]').within(() => {

            cy.get('.uc-downshiftTypeahead-wrapper').type('Barrington');

        })
        cy.contains("Select All").click();
        cy.get('[data-tn="filters-viewListingsBtn"]').click();
        cy.get('#tab-link-map').click();
       
    })

})