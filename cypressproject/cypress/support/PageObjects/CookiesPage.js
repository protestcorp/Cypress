class CookiesPage{
    getCookiesPagelink(){
        return cy.get('.col-md-7 > [href="/cookies-policy"]')
            }
}
export default CookiesPage;