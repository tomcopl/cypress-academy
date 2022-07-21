export class Order {
    deliveryAddress(firstName, lastName, postalCode) {
        this.#getFirstName().type(firstName);
        this.#getLastName().type(lastName);
        this.#getPostalCode().type(postalCode)
        return this;
    }

    fillFirstName(string) {
        this.#getFirstName().type(string);
        return this;
    }

    fillLastName(string) {
        this.#getLastName().type(string);
        return this;
    }

    fillPostalCode(string) {
        this.#getPostalCode().type(string);
        return this;
    }

#getFirstName() {
    return cy.getSelector("firstName");
}

#getLastName() {
    return cy.getSelector("lastName");
}

#getPostalCode() {
    return cy.getSelector("postalCode");
}
checkoutBtn() {
    cy.get('[id=checkout]').click();
}
continueBtn() {
    cy.get('[id=continue]').click();
}
finishBtn() {
    cy.get('[id=finish]').click();
}
checkOrder() {
    cy.get('[class=pony_express]').should('be.visible');
}
errorEmptyPostalCode() {
    cy.get('[data-test="error"]').contains("Error: Postal Code is required").should('be.visible');
}
}
export default Order;