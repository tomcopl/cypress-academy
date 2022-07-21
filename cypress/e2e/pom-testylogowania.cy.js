import Auth from "../pom-class/auth"

describe("",()=>{
    const auth=new Auth();

    const users = {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: "locked_out_user",
            password: "secret_sauce"
        },
        problemUser: {
            username: "problem_user",
            password: "secret_sauce"
        },
        performanceGlitchUser: {
            username: "performance_glitch_user",
            password: "secret_sauce"
        },
    }
    it("1.1.1. Logowanie standardowym użytkownikiem",()=>{
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');

        auth.loginUser(users.standardUser.username, users.standardUser.password);
        cy.get('[id="shopping_cart_container"]').should('be.visible', {timeout: 3000})
    });

    it('1.1.2. Logowanie zablokowanym użytkownikiem', () => {

        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
        
        auth.loginUser(users.lockedOutUser.username, users.lockedOutUser.password);
        cy.get('[data-test="error"]').contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible');
    })

    it('1.1.3. Logowanie problematycznym użytkownikiem', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
  
        auth.loginUser(users.problemUser.username, users.problemUser.password);
        cy.get('[src="/static/media/sl-404.168b1cce.jpg"]').should('have.length.greaterThan', 0);
      })
  
      it('1.1.4. Logowanie użytkownikiem z problemami performance', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
  
        auth.loginUser(users.problemUser.username, users.problemUser.password);
        cy.get('[id="shopping_cart_container"]').should('be.visible');
  
      })
  
      it('1.1.5.1. Wpisanie samej nazwy użytkownika', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
  
        auth.fillUsername("standard_user");
        auth.clickLoginBtn();
        cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible');
      })
  
      it('1.1.5.2. Wpisanie samego hasła', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
  
        auth.fillPasword("secret_sauce");
        auth.clickLoginBtn();
        cy.get('[data-test="error"]').contains("Epic sadface: Username is required").should('be.visible');
      })
  
      it('1.1.5.3. Puste pola logowania', () => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/');
  
        auth.clickLoginBtn();
        cy.get('[data-test="error"]').contains("Epic sadface: Username is required").should('be.visible');
      })


});