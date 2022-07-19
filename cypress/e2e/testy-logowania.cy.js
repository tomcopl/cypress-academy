describe('Sample describe', () => {

    it('1.1.1. Logowanie standardowym użytkownikiem', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce")
      cy.getSelector("login-button").click()
      cy.get('[id="shopping_cart_container"]').should('be.visible', {timeout: 3000})
    })
  
    it('1.1.2. Logowanie zablokowanym użytkownikiem', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("username").type("locked_out_user");
      cy.getSelector("password").type("secret_sauce")
      cy.getSelector("login-button").click()
      cy.get('[data-test="error"]').contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible')
    })
  
    it('1.1.3. Logowanie problematycznym użytkownikiem', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("username").type("problem_user");
      cy.getSelector("password").type("secret_sauce")
      cy.getSelector("login-button").click()
      cy.get('[src="/static/media/sl-404.168b1cce.jpg"]').should('have.length.greaterThan', 0)
    })
  
    it('1.1.4. Logowanie użytkownikiem z problemami performance', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("username").type("performance_glitch_user");
      cy.getSelector("password").type("secret_sauce")
      cy.getSelector("login-button").click()
      cy.get('[id="shopping_cart_container"]').should('be.visible')
  
    })
  
    it('1.1.5.1. Wpisanie samej nazwy użytkownika', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("username").type("performance_glitch_user");
      cy.getSelector("login-button").click()
      cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
    })
  
    it('1.1.5.2. Wpisanie samego hasła', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("password").type("secret_sauce")
      cy.getSelector("login-button").click()
      cy.get('[data-test="error"]').contains("Epic sadface: Username is required").should('be.visible')
    })
  
    it('1.1.5.3. Puste pola logowania', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  
      cy.getSelector("login-button").click()
      cy.get('[data-test="error"]').contains("Epic sadface: Username is required").should('be.visible')
    })
  
  
  }) 