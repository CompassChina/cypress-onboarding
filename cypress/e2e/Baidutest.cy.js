describe('Baidu',function(){
    beforeEach(() => {
        cy.visit('https://www.baidu.com/')
    })

    //导航栏测试
    context('navbar',() =>{
        //新闻，确认时间是否为今天
        it('news',() => {
            cy.log('news')
        })

        //hao123，网址确认
        it('hao123',() => {
            cy.log('hao123')
        })

        //地图，聚焦
        it('map',() => {
            cy.log('跳过了吗')
        })

        //图片
        it('picture',() => {
            cy.log('picture')
        })

        //热搜，换一换
        it('hot',() => {
            cy.log('hot')
        })
    })

    //搜索框测试，搜索cypress,only
    context('inputseach',() =>{
        it('search_cypress',() => {
            cy.log('执行了吗')
        })
    })

    context.only('贴吧是否存在',() => {
        it('判定',() => {
            cy.get('#s-top-left').within(() => {
                cy.get('a')

                //should方式
                .should('contain','贴吧')
                .and('be.visible')
                .should(($nav) => {

                    //expct方式
                    expect($nav).to.contain('贴吧')
                    //assert方式
                    assert.exists($nav.text(),'贴吧')
                    cy.screenshot()
                })

                
            })
        })
        
    })
})