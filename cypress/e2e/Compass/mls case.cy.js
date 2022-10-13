describe('MLS E2E Case', () => {
    before(function () {
        cy.login1('jiayin.huang+cypress@compass.com', 'Hjy930118');
        cy.visit('/app/agent-search');
        //进入Bright panel
        cy.contains('Preferences').click();
        cy.get('[data-tn="agentSearchSettings-listingFeed-listing_editor_manual"]').click();
        cy.get('[data-tn="agentSearch-userSettingsModal-close"]').click();
    })

    it('Case1', () => {
        //找到Property Type filter
        cy.get('#downshift-1-toggle-button').click();
        cy.contains('Select All').click();
        cy.get('[data-tn="applied-criteria-button"]').click();
        //我写的
        /* cy.get('.appliedCriteriaPanel-filterLabel').then($label => {
            expect($label.text()).to.include('Property Type')
        })
        cy.get('.appliedCriteriaPanel-filterValues .cx-pillLabel').then($Values => {
            expect($Values.text()).to.include('FarmLandMulti-FamilyResidential')
        }) */

        //豆豆优化
        cy.get('.appliedCriteriaPanel-body').should('include.text', 'Property Type');
        cy.get('[data-tn="PropertyType"] .uc-downshiftTypeahead-valueItemLabel').each($option => {
            cy.get('.appliedCriteriaPanel-body').should('include.text', $option.text());
        });
    })


    it('Case2', () => {
        cy.contains('Clear all').click();
        cy.contains('View listings').click();
        //先从结果中取一个listingID
        cy.get('.results-table-externalId').first().then($ID => {
            cy.contains('Show criteria').click();
            //输入这个ID
            cy.get('[data-tn="textInput-input-MLS Number"]').type($ID.text());
            cy.wait(2000);
            //断言有唯一结果
            cy.get('[data-tn="listing-count"] [data-tn="total-listings-count"]').then($Count => {
                cy.log($Count.text())  //可以注销
                expect($Count.text()).to.eq('1')
            })
            cy.contains('View listings').click();
            //断言查询结果和最初取到的ID一致
            cy.get('.results-table-externalId').should('have.text',$ID.text());
        })
    })


    it('Case3', () => {
        cy.contains('Show criteria').click();
        cy.contains('Clear all').click();
        cy.wait(2000);
        cy.get('[data-tn="mlsSearchFilters-checkbox-Active"]').children().click();
        cy.contains('View listings').click();
        cy.wait(2000);
        cy.get('[data-tn="results-table-columnid-listingDetailsStatus"]').each(($Status) => {
            cy.log($Status.text())  //可以注销
            //我写的（BDD和TDD不要混用）
            /* assert.equal($Status.text(), 'ACTIVE', 'All listings are Active') */

            //豆豆优化
            const status = $Status.text();
            expect(status.toUpperCase()).to.eq('ACTIVE');
        });
    })
})