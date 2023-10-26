class LoginPage{
    visit(){
        cy.visit('https://www.hsbc.co.in/ways-to-bank/branches/');
    }

    Logo(){
        cy.xpath("//div[@class='header-logo lg-2']").should('be.visible')
    }
    
}
export default LoginPage;