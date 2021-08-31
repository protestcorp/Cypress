class PrivacyPage{
    getPrivacyPagelink(){
        return cy.get('.col-md-7 > [href="/privacy-policy"]')
            }
}
export default PrivacyPage;