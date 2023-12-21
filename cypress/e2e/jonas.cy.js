/* eslint-disable linebreak-style */

// Teste executado em 14/12/2023 durante a pré-venda de ingressos.
// O procedimento consiste em atualizar repetidamente uma tela específica.
// O objetivo principal do assert é verificar a presença do texto "Em breve",
// indicando que a fila de compra ainda não foi liberada.
// Este teste foi repetido 50 vezes, levando aproximadamente de 2 minutos e 30 segundos a 2 minutos e 50 segundos para ser concluído.

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
