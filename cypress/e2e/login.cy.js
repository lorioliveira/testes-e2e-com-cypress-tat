/* eslint-disable linebreak-style */

describe('Login', () => {

  it('successfully logs in', () => {

    cy.guiLogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})