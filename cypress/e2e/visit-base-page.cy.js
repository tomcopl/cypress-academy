describe('Sample describe', () => {

  it('Sample name f.e. Should open home page and check url', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  })
})