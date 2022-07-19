describe('Sample describe', () => {
    beforeEach('', ()=>{
        cy.visit('/');
    });
    it('1.2.2.1. Sortowanie produktów po nazwie asc', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce")
        cy.getSelector("login-button").click();

        cy.get(".inventory_item_name").then(($elements) => {
            const strings = [...$elements].map((el) => el.innerText);
            expect(strings).to.deep.equal([...strings].sort());
          });
      })

    it('1.2.2.2. Sortowanie produktów po nazwie desc', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.getSelector("username").type("standard_user");
        cy.getSelector("password").type("secret_sauce")
        cy.getSelector("login-button").click();
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')

        cy.get(".inventory_item_name").then(($elements) => {
            const strings = [...$elements].map((el) => el.innerText);
            expect(strings).to.deep.equal([...strings].sort().reverse());
          });
      })


}) 
