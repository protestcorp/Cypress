/// <reference types="cypress" />

describe("validate img",function()
{
    it("img",function()
    {
cy.visit("https://hurawatch.ru/movie/spider-man-far-from-home-lrpv3/xrk4j5q")

cy.get('https://cdn.sb-inv1.com/sb/notifications/utility/default/us/blog/financeskipper/message_redcircle2/10/img/sale3.jpg')
expect('https://cdn.sb-inv1.com/sb/notifications/utility/default/us/blog/financeskipper/message_redcircle2/10/img/sale3.jpg').to.have.string('https://cdn.sb-inv1.com/sb/notifications/utility/default/us/blog/financeskipper/message_redcircle2/10/img/sale3.jpg')
})

}
)