/* eslint-disable linebreak-style */


describe('F5', () => {
  before(() => {
    cy.visit('/jonasbrothers')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get(':nth-child(3) > a > img').click()
    cy.contains('.event-status', 'Em breve').should('be.visible')
  })

  it('Refresh na página várias vezes', () => {
    for (let i = 0; i < 50; i++) {
      cy.reload()
      cy.contains('.event-status', 'Em breve').should('be.visible')
    }
  })
})
