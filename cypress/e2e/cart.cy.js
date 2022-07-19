describe('Sample describe', () => {

  it('1.2.1. Przeglądanie dostępnych produktów', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.get('[class="inventory_item_name"]').contains('Sauce Labs Backpack').click();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');
      cy.getSelector("back-to-products").click();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })

    it('1.2.3.1. Dodawanie produktów do koszyka z widoku listy', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.getSelector("add-to-cart-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('be.visible');
    })

    it('1.2.3.2. Dodawanie produktów do koszyka z widoku produktu', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.get('[class="inventory_item_name"]').contains('Sauce Labs Backpack').click();
      cy.getSelector("add-to-cart-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('be.visible');
    })

    it('1.2.3.1. Usuwanie produktów z koszyka z widoku listy', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.getSelector("add-to-cart-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('be.visible');
      cy.getSelector("remove-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('not.exist');
    })

    it('1.2.3.2. Usuwanie produktów z koszyka z widoku produktu', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.get('[class="inventory_item_name"]').contains('Sauce Labs Backpack').click();
      cy.getSelector("add-to-cart-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('be.visible');
      cy.getSelector("remove-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('not.exist');
    })

    it('1.2.3.3. Usuwanie produktów z koszyka z widoku koszyka', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

      cy.getSelector("username").type("standard_user");
      cy.getSelector("password").type("secret_sauce");
      cy.getSelector("login-button").click();
      cy.getSelector("add-to-cart-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('be.visible');
      cy.get('[class=shopping_cart_container]').click();
      cy.getSelector("remove-sauce-labs-backpack").click();
      cy.get('[class=shopping_cart_badge]').should('not.exist');

  })

  it('1.2.5. Przeglądanie produktów w koszyku', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

    cy.getSelector("username").type("standard_user");
    cy.getSelector("password").type("secret_sauce");
    cy.getSelector("login-button").click();
    cy.getSelector("add-to-cart-sauce-labs-backpack").click();
    cy.get('[class=shopping_cart_badge]').should('be.visible');
    cy.get('[class=shopping_cart_container]').click();
    cy.get('[class="inventory_item_name"]').contains('Sauce Labs Backpack').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');
    cy.getSelector("back-to-products").click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
})

it('1.2.6.1. Składanie zamówienia z poprawnymi danymi', () => {
cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

cy.getSelector("username").type("standard_user");
cy.getSelector("password").type("secret_sauce");
cy.getSelector("login-button").click();
cy.getSelector("add-to-cart-sauce-labs-backpack").click();
cy.get('[class=shopping_cart_badge]').should('be.visible');
cy.get('[class=shopping_cart_container]').click();
cy.getSelector("checkout").click();
cy.getSelector("firstName").type("Jan");
cy.getSelector("lastName").type("Kowalski");
cy.getSelector("postalCode").type("35-000");
cy.getSelector("continue").click();
cy.getSelector("finish").click();
cy.get('[class=pony_express]').should('be.visible');

})

it('1.2.6.2. Składanie zamówienia bez kodu pocztowego', () => {
cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')

cy.getSelector("username").type("standard_user");
cy.getSelector("password").type("secret_sauce");
cy.getSelector("login-button").click();
cy.getSelector("add-to-cart-sauce-labs-backpack").click();
cy.get('[class=shopping_cart_badge]').should('be.visible');
cy.get('[class=shopping_cart_container]').click();
cy.getSelector("checkout").click();
cy.getSelector("firstName").type("Jan");
cy.getSelector("lastName").type("Kowalski");
cy.getSelector("continue").click();
cy.get('[data-test="error"]').contains("Error: Postal Code is required").should('be.visible');

})

})