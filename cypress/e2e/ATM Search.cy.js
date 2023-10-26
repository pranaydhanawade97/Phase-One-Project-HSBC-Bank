import branches from "../Page Objects/Validate_Branches";
import country from "../Page Objects/Add_country";


describe('Test ATM Search Functionality', function() {

    beforeEach(function(){
      //1. Open https://www.hsbc.co.in/
      cy.visit('https://www.hsbc.co.in/')
      
  
      cy.fixture('example').then(function(data){
        globalThis.data=data;
      })
  
    })
    const urlpage = new branches
    const add = new country

  
    it('HSBC ATM Search Test Scenario:', () => {
      
        //2. Scroll down to the bottom of the page
        cy.scrollTo('bottom');

        cy.wait(5000)


        //3. Click on Find your nearest branch or ATM link in footer section
        cy.xpath("(//a[@href='/ways-to-bank/branches/'])[4]").click()
        cy.wait(5000)


        //4. Validate in new page the URL has String = ‘/ways-to-bank/branches/’

        urlpage.visit('https://www.hsbc.co.in/ways-to-bank/branches/');
        
        urlpage.validateurl('https://www.hsbc.co.in/ways-to-bank/branches/');
        cy.url().should('include',globalThis.data.url)

        cy.wait(5000)

        //5. Validate Header as Branches & ATM
        cy.xpath("(//h1[normalize-space()='Branches & ATMs'])[1]").should('be.visible')
        cy.contains(globalThis.data.atmheader).should('be.visible')

        cy.wait(5000)

        //6. Click on before Branch & ATM Locator button
        cy.xpath("//a[@id='content_main_button_1']").click();

        cy.wait(5000)

        //7. Type country name as India
        add.visit();
        add.click();

        cy.wait(5000)

        //8. In drop-down option click option India
        cy.xpath("(//input[@id='searchInput'])[1]").click()

        cy.xpath("//li[@id='PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc']").click()   
        
        cy.scrollTo('top')

        cy.wait(5000)

        //9. Validate ATM Header name is showing as Rajbhavan Road
        cy.xpath("//h2[@class='_1521gYSzrNIMk9R-rS4Hur']").should('be.visible')
        cy.contains(globalThis.data.Rajbhavanatm).should('be.visible')

        cy.wait(5000)

        //10. Click on add Show more results button
        cy.xpath("//button[@aria-label='Show more results']").click()

        cy.wait(5000)

        //11. Check second ATM branch name tooltip as 2 in red color is getting displayed
        cy.xpath("//span[@class='_1OVu0dKjGeodXsBo3rrQ-i'][normalize-space()='2']").should('be.visible')
        cy.contains(globalThis.data.tooltip).should('exist')

        cy.wait(5000)

        // 12. Check Instagram in social media option in footer section

        cy.xpath("//a[@class='social-image social-icon-instagram']").should('be.visible')
        cy.contains(globalThis.data.Insta).should('be.visible')


        //13. Check Facebook in social media option in footer section
        cy.xpath("//a[@class='social-image social-icon-facebook']").should('be.visible')
        cy.contains(globalThis.data.fb).should('be.visible')

        //14. Check Twitter in social media option in footer section

        cy.xpath("//a[@class='social-image social-icon-twitter']").should('be.visible')
        cy.contains(globalThis.data.tt).should('be.visible')

        //15. Check Youtube in social media option in footer section

        cy.xpath("//a[@class='social-image social-icon-youtube']").should('be.visible')
        cy.contains(globalThis.data.yt).should('be.visible')

        cy.wait(5000)
        //16. Click on HSBC Logo
        cy.xpath("//div[@class='header-logo lg-2']").click()

        cy.wait(5000)

        //17. Validate page is navigating to home page by its title

        cy.title().should('include','HSBC India')

        cy.wait(5000)

        //18. Scroll down to the bottom
        cy.scrollTo('bottom')

        //19. Check and Click on Privacy link
        cy.xpath("(//a[normalize-space()='Privacy Statement'])[2]").click()
        
        cy.wait(5000)

        //20. Validate Privacy Statement as Header

        cy.contains(globalThis.data.privacy).should('exist')

        cy.wait(5000)

    })  
  })
