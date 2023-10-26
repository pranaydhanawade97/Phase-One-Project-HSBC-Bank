class country{
    visit(){
        cy.visit('https://www.hsbc.co.in/branch-finder/')
    }
    click(){
        cy.xpath("//input[@role='combobox']").type('India').should('have.value','India')
    }
}

export default country;