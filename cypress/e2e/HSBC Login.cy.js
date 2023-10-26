

describe('Test HSBC Login Functionality', function() {

    beforeEach(function(){
      //1. Open https://www.hsbc.co.in/
      cy.visit('https://www.hsbc.co.in/')
     
  
      cy.fixture('example').then(function(data){
        globalThis.data=data;
      })
  
    })

    it('HSBC Login Test Scenario', () => {
        
        //2. Validate HSBC Bank Logo
        
        cy.xpath("//div[@class='header-logo lg-2']").should('be.visible')
        

        //3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and Deposit

        cy.title().should('include','HSBC India')
        
        //4. Click on Login button
        cy.visit('https://www.hsbc.co.in/fusion/');
        cy.wait(3000)
  
        cy.contains('Log On').click();  
        cy.wait(3000)
        //5. Validate Log On header in Login page
        cy.xpath("//span[normalize-space()='Log On']").should('be.visible')
        cy.contains(globalThis.data.logon).should('be.visible')
        cy.wait(3000)
        
        //6. Check Continue button is available
        cy.contains('Continue').should('be.visible')
        cy.wait(3000)
        
        //7. Also validate initially Continue button is disabled.
        //cy.contains('Continue').should('be.disable')
        cy.contains(globalThis.data.button2).should('be.visible')
        cy.wait(3000)
        
        //8. Type any random email in the username field

        cy.get("input[id='username']").type('pranay123@gmail.com');
        cy.wait(3000)

        //9. Now check Continue button is Enabled

        cy.contains('Continue').should('be.visible').and('be.enabled');
        cy.wait(3000)

        //10. Validate Remember me check box is not checked by default

        cy.xpath("//input[@id='rememberMe']").should('not.be.checked')
        cy.contains(globalThis.data.checkbox).should('be.visible')
        cy.wait(3000)

        //11. Validate there is a question mark tooltip present on the page
        
        // cy.contains(globalThis.data.questionmark).should('exist')
        cy.xpath("//span[@class='icon icon-circle-help-solid help-icon']").should('be.visible')
        cy.wait(3000)

        //12. Click on the tooltip
        cy.xpath("//span[@class='icon icon-circle-help-solid help-icon']").click()

        cy.wait(3000)

        //13. Now validate the username header in the new pop-up screen
        cy.contains(globalThis.data.questionmark).should('be.visible')
        cy.wait(3000)


        //14. Validate there is a Close button in the new pop-up screen
        cy.contains(globalThis.data.close).should('exist')
        cy.wait(3000)

        //15. Click on the close button present in the new pop-up screen

        cy.xpath("//span[@class='icon icon-delete']").click()
        cy.wait(3000)

        cy.pause()











        
        

        

        

    })  
  })
