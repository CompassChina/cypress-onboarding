describe('Agent Search',() => {
    beforeEach(() => {
        cy.login()
    })
    
    it('Bright, all Preperty Type',() => {
        //切换到bright面板
        cy.contains('Preferences').click()
        cy.contains('Bright filters').click().type('{esc}')
 
        //清除Applied中其他选项
        cy.get('[data-tn="applied-criteria-button"]').click()
        cy.contains('Clear all').click()

        //选择所有Property Type
        let input
        cy.get('[data-tn="PropertyType"]').within(() => {
            cy.get('.uc-downshiftTypeahead-dropdownButton').click()
            cy.contains("Select All").click()
            cy.get('[data-tn="mlsSearchFilters-downshiftTypeaheadSelectedItem"]').then($input =>{
                input = $input.text()
           })
            
          })
        //对比Applied中显示
        cy.get('[data-tn="applied-criteria-button"]').click()
        cy.get('.appliedCriteriaPanel-filterLabel').should('have.text','Property Type')
        cy.get('.appliedCriteriaPanel-filterValues').within(() => {
            cy.get('.cx-pillLabel').then($applied => {
                const applied = $applied.text()
                cy.log(applied)
                cy.log(input)
                expect(applied).to.equal(input)
            })   
        })
    })

    it.only('Search MLSNumber',() => {
        //uncheck only on compass，保证没有private出现
        cy.contains('Preferences').click()
        cy.contains('Bright filters').click()
        cy.get('[type="checkbox"]').last().uncheck().type('{esc}')
        //清除Applied中其他选项
        cy.get('[data-tn="applied-criteria-button"]').click()
        cy.contains('Clear all').click()

        //取到listingid
        const i = Math.floor(Math.random()*10+4);
        cy.get('.results-table-externalId').eq(i).then(($getnum) => {
            const getnum = $getnum.text()
           // expect(getnum).to.exsit()
            //输入对应编号的房源，查看result table
            cy.get('[data-tn="textInput-input-MLS Number"]').type(getnum)
            cy.get('[data-tn="filters-viewListingsBtn"]').click()
            //判断是否搜索到该编号房源
            cy.get('.results-table-externalId')
            .should('have.text',getnum)
        })
    })

    
    it('Active status verify',() => {

        cy.get('[data-tn="applied-criteria-button"]').click()
        cy.contains('Clear all').click()
        cy.get('[data-tn="mlsSearchFilters-checkbox-Active"]').click()
        cy.get('[data-tn="filters-viewListingsBtn"]').click()
        
        //逐一对比状态为active
        cy.get('[data-tn="results-table-columnid-listingDetailsStatus"]').each($status => {
            const status = $status.text()
            //expect($status).to.have.text('ACTIVE')
            //兼容大小写active
            expect(status.toUpperCase()).to.eq('ACTIVE'); 
        }) 
    })
})
