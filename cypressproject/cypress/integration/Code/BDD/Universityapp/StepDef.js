/// <reference types="Cypress" />
import WUR2022 from "../../../../support/PageObjects/WUR2022";

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const wur2020 =new WUR2022()

Given('Launch the url',()=>
{
    cy.visit(Cypress.env('Baseurl')+Cypress.env('TU'))
 //cy.visit(Cypress.env("TM"))
})
And('validate rank',function()
{   
        wur2020.getTopScore().then(function(element)
       {
        
            wur2020.getOverAllScore().each(($el, index, $list) => {
           const amount=element.text()
           var res= amount.split(" ")
          var score= res[1].trim()
        
        const amountt=$el.text()
        var res= amountt.split(" ")
        res= res[1].trim()
        expect(Number(score)).to.greaterThan(Number(res))
        
       })
       wur2020.getFirstRank().should("have.text","1")
       
      wur2020.getFistUniversityName().then(function(qwert)
       {
          const a = qwert.text()
          cy.log(a)
       })
     
       wur2020.getFirstLocationName().then(function(qwert)
       {
          const a = qwert.text()
          cy.log(a)
       })
       wur2020.getSrc().should("have.attr","src")
    
      }) 
      cy.get(":nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi").then(function(element)
      {
      cy.get(":nth-child(n+4) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi").each(($el, index, $list) => {
      
       
          const amount=element.text()
          var res= amount.split(" ")
         var score= res[1].trim()
       
       const amountt=$el.text()
       var res= amountt.split(" ")
       res= res[1].trim()
       if((Number(score))==(Number(res))){
          
         cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","=3")
         cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","=3")
         cy.get(':nth-child(6) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","5")
       }
       //expect(Number(score)).to.greaterThan(Number(res))
       cy.log("work")
      
       })
      })
   
})
 //cy.visit(Cypress.env('Baseurl')+Cypress.env('WUR'))
 //cy.visit(Cypress.env('Baseurl')+Cypress.env('TU'))

//  cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link').click()
   //cy.get("#span[xpath*='1']").click()