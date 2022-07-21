export class Cart {
    addProductFromList(productName) {
        cy.get('[class=inventory_item_name]').contains(productName).parents('[class=inventory_item_description]').find('button').click();
    }
    addProduct() {
        cy.contains("Add to cart").click();
    }
    removeProduct() {
        cy.contains("Remove").click();
    }
    removeProductFromList(productName) {
        cy.get('[class=inventory_item_name]').contains(productName).parents('[class=inventory_item_description]').find('button').click();
    }
    viewProduct(productName) {
        cy.get('[class=inventory_item_name]').contains(productName).click();
    }
    viewCart() {
        cy.get('[class=shopping_cart_container]').click();
    }
    clickBackToProductsBtn() {
        this.#getBackToProductsBtn().click();
        return this;
    }
    #getBackToProductsBtn() {
        return cy.getSelector("back-to-products");
    }
    checkCart() {
        cy.get('[class=shopping_cart_badge]').should('be.visible');
    }
    checkEmptyCart() {
        cy.get('[class=shopping_cart_badge]').should('not.exist');
    }
}

export default Cart;