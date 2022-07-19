describe('Sample describe', () => {

    it('1.3.1. Resetowanie stanu aplikacji z widoku listy', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.getSelector("add-to-cart-sauce-labs-backpack").click();
        cy.get('[class=shopping_cart_badge]').should('be.visible');
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=reset_sidebar_link]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').contains("Remove").should('be.visible');
    
      })
    
      it('1.3.2. Resetowanie stanu aplikacji z widoku produktu', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.getSelector("add-to-cart-sauce-labs-backpack").click();
        cy.get('[class=shopping_cart_badge]').should('be.visible');
        cy.contains('Sauce Labs Backpack').click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=reset_sidebar_link]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').contains("Remove").should('be.visible');
    
      })
    
      it('1.3.3. Resetowanie stanu aplikacji z widoku koszyka', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.getSelector("add-to-cart-sauce-labs-backpack").click();
        cy.get('[class=shopping_cart_badge]').should('be.visible');
        cy.get('[class=shopping_cart_container]').click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=reset_sidebar_link]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').contains("Remove").should('be.visible');
    
      })
    
      it('1.4.1.1.1. Wylogowywanie użytkownika z widoku listy', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=logout_sidebar_link]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.getCookies()
  .should('have.length', 0)
    
      })
    
      it('1.4.1.1.2. Wylogowywanie użytkownika z widoku produktu', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.contains('Sauce Labs Backpack').click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=logout_sidebar_link]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.getCookies()
  .should('have.length', 0)
    
      })
    
      it('1.4.1.2.1. Powrót do listy z widoku koszyka', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.get('[class=shopping_cart_container]').click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=inventory_sidebar_link]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    
      })
    
      it('1.4.1.2.2. Powrót do listy z widoku produktu', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.contains('Sauce Labs Backpack').click();
        cy.get('[class=bm-burger-button]').click();
        cy.get('[id=inventory_sidebar_link]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    
      })
    
      it('1.4.3.1. Przechodzenie do facoobka', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.get('[class="social_facebook"]').children().should('have.attr', 'href').and('equal', 'https://www.facebook.com/saucelabs');
    
      })
    
      it('1.4.3.2. Przechodzenie do twittera ', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.get('[class="social_twitter"]').children().should('have.attr', 'href').and('equal', 'https://twitter.com/saucelabs');
    
      })
    
      it('1.4.3.3. Przechodzenie do linkedin', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce");
        cy.getSelector("login-button").click();
        cy.get('[class="social_linkedin"]').children().should('have.attr', 'href').and('equal', 'https://www.linkedin.com/company/sauce-labs/');
    
      })
    
    
      }) 
