class HomePage{

getWorldUniversityLogo(){
  return  cy.get('.qs-world-ranking-hero.d-none > .container > .right-hand-side-text > .right-top-logos > ._qs-ranking-logo > img')
}

}
export default HomePage;