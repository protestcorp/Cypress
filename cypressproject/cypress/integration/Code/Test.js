/// <reference types="cypress" />

describe("validate img",function()
{
    it("img",function()
    {
cy.visit("https://www.w3schools.com/w3css/w3css_images.asp")

cy.get('[style="margin-left:-16px;margin-right:-16px;"] > :nth-child(1) > .w3-round')
expect('[style="margin-left:-16px;margin-right:-16px;"] > :nth-child(1) > .w3-round').to.have.string('[style="margin-left:-16px;margin-right:-16px;"] > :nth-child(1) > .w3-round')
})

}
)