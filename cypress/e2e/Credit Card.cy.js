describe('Test Credit Card Functionality', function() {

  beforeEach(function(){
    //1. Open https://www.hsbc.co.in/
    cy.visit('https://www.hsbc.co.in/')
    

    cy.fixture('example').then(function(data){
      globalThis.data=data;
    })

  })

  it('HSBC Credit Card Flow:', () => {
    
    //2. Hover cursor on Banking menu navigation
    cy.xpath("//ul[@class='row']//span[@class='header-main-navigation-title'][normalize-space()='Banking']").trigger('mouseover').click();
    cy.wait(5000)

    //3. Click on Credit Cards link
    cy.contains('Credit Cards').click({force:true})

    cy.wait(5000)
    

    cy.get('.A-TYP38L-RW-ALL.text-container.text').should('be.visible')

    cy.wait(5000)
    //4. Validate Credit Card as a header text
    cy.xpath("//h1[@class='A-TYP38L-RW-ALL text-container text ']").should('be.visible');

    cy.contains(globalThis.data.headerText).should('be.visible')

    cy.url().should('include',globalThis.data.creditUrl)

    cy.wait(5000)
    

    //5. Validate Apply Now button
    cy.contains(globalThis.data.button).should('be.visible')

    cy.wait(5000)

    //6. Check there are Three types of Credit Card options are available
    
    cy.get('.productModule').should('have.length', 3)
    cy.wait(5000)
    
    
    //7. Validate first credit Card image attribute is HSBC Visa Cashback Credit Card
    //8. Validate first credit Card header text is HSBC Cashback Credit Card
    cy.xpath("//h2[normalize-space()='HSBC Cashback Credit Card']").should('be.visible')
   
    cy.contains(globalThis.data.card).should('exist')

    cy.wait(5000)


    
    //9. Validate first credit Card has attached Compare cards button
    cy.xpath("//a[@id='listing_main_button_1']").should('be.visible')
    
    cy.contains(globalThis.data.compare).should('exist')
    cy.wait(5000)
    
    
    
    //10. Validate first credit Card has attached Find out more button
    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Find out more'])[1]").should('be.visible')
    cy.contains(globalThis.data.find).should('be.visible')

    cy.wait(5000)

    
    
    //11. Validate first credit Card has attached Apply now button
    cy.xpath("//a[@id='listing_main_button_3']").should('be.visible')
    cy.contains(globalThis.data.apply).should('be.visible')

    cy.wait(5000)

    //12. Click on First Credit card’s Compare cards button

    cy.xpath("(//span[contains(text(),'Compare cards')])[1]").click()

    cy.wait(5000)

    //13. Validate the new pop up has a close button
    cy.xpath("//button[@class='close-button']/..//button[@class='close-button']").should('be.visible')
    cy.wait(5000)
    cy.contains(globalThis.data.exit).should('exist')

    //14. Validate Select cards to compare is header of the pop up
    cy.xpath("//h2[@id='title-pp_tools_productComparator_4']").should('be.visible')
    cy.contains(globalThis.data.cardcompare).should('be.visible')

    cy.wait(5000)

    //15. Check that there are four credit cards options are available in the pop up to compare

    cy.xpath("//div[@class='tile-selector']").should('have.length', 3)

    cy.wait(5000)

    //16. Check first and second Credit Card checkbox to compare

    cy.xpath("(//div[@role='checkbox'])[1]").click();
    cy.xpath("(//div[@role='checkbox'])[2]").click();

    cy.wait(5000)

    //17. Click on Compare button
    cy.xpath("//button[@class='A-BTNP-RW-ALL']").click();

    cy.wait(5000)

    //18. Validate total two credit cards have been selected

    cy.xpath("//h2[@id='pp_tools_productComparator_2-title']").should('be.visible')

    cy.contains(globalThis.data.cardone).should('exist')

    cy.xpath("//h2[@id='pp_tools_productComparator_3-title']").should('be.visible')

    cy.contains(globalThis.data.cardtwo).should('exist')

    cy.wait(5000)

    //19. Validate two remove links are present for both the credit card

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[1]").should('be.visible')

    cy.contains(globalThis.data.removecardone).should('exist')

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[2]").should('be.visible')

    cy.contains(globalThis.data.removecardtwo).should('exist')

    

    //20. Click on Add card link

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Add card'])[1]").click();

    

    //20. Click on Add card link
    cy.xpath("(//div[@role='checkbox'])[3]").click();

    cy.wait(5000)

    //21. Add third credit card checkbox to compare
    cy.xpath("//button[@class='A-BTNP-RW-ALL']").click();

    cy.wait(5000)
    // Scroll to the top of the page
    cy.scrollTo('top');

    cy.wait(2000)


    //22. Now validate total three credit cards have been selected

    cy.xpath("//h2[@id='pp_tools_productComparator_2-title']").should('be.visible')

    cy.contains(globalThis.data.cardone).should('exist')

    cy.xpath("//h2[@id='pp_tools_productComparator_3-title']").should('be.visible')

    cy.contains(globalThis.data.cardtwo).should('exist')

    cy.xpath("(//h2[normalize-space()='Premier Mastercard Credit Card'])[1]").should('be.visible')

    cy.contains(globalThis.data.cardthree).should('exist')

    cy.wait(5000)



    // 23. Validate total three remove links are present

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[1]").should('be.visible')

    cy.contains(globalThis.data.removecardone).should('exist')

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[2]").should('be.visible')

    cy.contains(globalThis.data.removecardtwo).should('exist')
     
    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[3]").should('be.visible')

    cy.contains(globalThis.data.removecardthree).should('exist')

    cy.scrollTo('top')

    cy.wait(5000)

    // 24. Now click on any remove link out of three

    cy.xpath("(//span[@aria-hidden='true'][normalize-space()='Remove card'])[1]").click();

    
    cy.wait(5000)

    // 25. Now only two credit card options should available in the page
    // 26. Again click on Add card link
    cy.scrollTo('top')
    cy.xpath("//div[@class='product-select-container']//div[3]//a[1]//span[1]").click()

    cy.wait(5000)
   

    // 27. In pop-up, click on close button
    // 28 The pop-up should close successfully

    cy.xpath("(//button[@class='close-button'])[1]").click();

    cy.wait(5000)
    
    cy.pause()
  }) 
})