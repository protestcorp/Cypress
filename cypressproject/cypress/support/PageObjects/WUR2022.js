class WUR2022{
getTopScore(){
    return cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi')
}
getOverAllScore(){
    return cy.get(':nth-child(n+2) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi')
}
getFirstRank(){
    return cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi')
}
getFistUniversityName(){
    return  cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link')
}
getFirstLocationName(){
    return  cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .location')
}
getSrc(){
    return cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .logo-wrapper > img')
}
}
export default WUR2022;