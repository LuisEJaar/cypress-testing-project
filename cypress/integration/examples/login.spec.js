describe('working with inputs', () => {

  it('Should fill username', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').clear();
    cy.get('#user_login').type('Some Invalid Name');
  })
  
  it('Should fill password', () => {
    cy.get('#user_password').clear();
    cy.get('#user_password').type('Some Invalid password');
  })

  it('Should submit login form', () => {
    cy.contains('Sign in').click();
  })

  it('Should display error message', () => {
    cy.get('.alert-error').should('be.visible')
  })
  
})