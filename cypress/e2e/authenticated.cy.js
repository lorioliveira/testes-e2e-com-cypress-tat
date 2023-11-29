/* eslint-disable linebreak-style */
/// <reference path="../support/commands.d.ts" />
import { faker } from '@faker-js/faker/locale/en'

describe('Cenarios onde authentication e uma pre-condicao', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.sessionLogin()
  })
  // -----CRUD - NOTA----
  it('CRUD nota', () => {
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes')

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes')
  })
  // ----FORM CARTAO CREDITO----
  it('Submeter o form de pagamento', () => {
    cy.intercept('POST', '**/prod/billing').as('paymentRequest')

    cy.fillSettingsFormAndSubmit()

    cy.wait('@getNotes')
    cy.wait('@paymentRequest')
      .its('state')
      .should('be.equal', 'Complete')
  })
  // ---- LOGOUT-----
  it('logs out', { tags: '@desktop-and-tablet' }, () => {
    cy.visit('/')
    cy.wait('@getNotes')
    if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
      cy.get('.navbar-toggle.collapsed')
        .should('be.visible')
        .click()
    }
    cy.contains('.nav a', 'Logout').click()
    cy.get('#email').should('be.visible')
  })
})