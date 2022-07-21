import Cart from "../pom-class/cart"
import Auth from "../pom-class/auth"
import Order from "../pom-class/order"

describe("",()=>{
    const cart=new Cart();
    const auth=new Auth();
    const order=new Order();
    const usersdata= {
        JanKowalski: {
            firstName: 'Jan',
            lastName: 'Kowalski',
            postalCode: '35-000'
        }
    }
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
    

  it('1.2.1. Przeglądanie dostępnych produktów', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.viewProduct('Sauce Labs Backpack');
      cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');
      cart.clickBackToProductsBtn();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })

    it('1.2.3.1. Dodawanie produktów do koszyka z widoku listy', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.addProductFromList('Sauce Labs Backpack');
      cart.checkCart();
    })

    it('1.2.3.2. Dodawanie produktów do koszyka z widoku produktu', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.viewProduct('Sauce Labs Backpack');
      cart.addProduct();
      cart.checkCart();
    })

    it('1.2.3.1. Usuwanie produktów z koszyka z widoku listy', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.addProductFromList('Sauce Labs Backpack');
      cart.checkCart();
      cart.removeProductFromList('Sauce Labs Backpack');
      cart.checkEmptyCart();
    })

    it('1.2.3.2. Usuwanie produktów z koszyka z widoku produktu', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.viewProduct('Sauce Labs Backpack');
      cart.addProduct();
      cart.checkCart();
      cart.removeProduct();
      cart.checkEmptyCart();
    })

    it('1.2.3.3. Usuwanie produktów z koszyka z widoku koszyka', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      auth.loginUser(users.standardUser.username, users.standardUser.password);
      cart.viewProduct('Sauce Labs Backpack');
      cart.addProduct();
      cart.viewCart();
      cart.removeProduct();
      cart.checkEmptyCart();
  })

  it('1.2.5. Przeglądanie produktów w koszyku', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

    auth.loginUser(users.standardUser.username, users.standardUser.password);
    cart.addProductFromList('Sauce Labs Backpack');
    cart.checkCart();
    cart.viewCart();
    cart.viewProduct('Sauce Labs Backpack');
    cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cart.clickBackToProductsBtn();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
})

it('1.2.6.1. Składanie zamówienia z poprawnymi danymi', () => {
cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

auth.loginUser(users.standardUser.username, users.standardUser.password);
cart.addProductFromList('Sauce Labs Backpack');
cart.checkCart();
cart.viewCart();
order.checkoutBtn();
order.deliveryAddress(usersdata.JanKowalski.firstName, usersdata.JanKowalski.lastName, usersdata.JanKowalski.postalCode);
order.continueBtn();
order.finishBtn();
order.checkOrder();
})

it('1.2.6.2. Składanie zamówienia bez kodu pocztowego', () => {
cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

auth.loginUser(users.standardUser.username, users.standardUser.password);
cart.addProductFromList('Sauce Labs Backpack');
cart.checkCart();
cart.viewCart();
order.checkoutBtn();
order.fillFirstName(usersdata.JanKowalski.firstName);
order.fillLastName(usersdata.JanKowalski.lastName);
order.continueBtn();
order.errorEmptyPostalCode();
})
})