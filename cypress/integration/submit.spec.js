describe('Submit form', () => {
  it('should submit the form', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get('#developer-name').type('vero')
    cy.get('#tried-test-cafe').click()
    cy.get('#submit-button').click()
    cy.get('#article-header').contains('Thank you')
  })
})