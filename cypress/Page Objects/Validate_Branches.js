class branches{
    visit(){
        cy.visit('https://www.hsbc.co.in/ways-to-bank/branches/');
    }

    validateurl(){
        cy.url().should('include','/ways-to-bank/branches/');
    }
}
export default branches