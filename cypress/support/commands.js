function generateTestSelector(value) {
    return `[data-test=${value}]`;
}

Cypress.Commands.add("getSelector", (value) => {
    return cy.get(generateTestSelector(value))
}); 
