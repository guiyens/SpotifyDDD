// https://docs.cypress.io/api/introduction/api.html

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('To play a track ', () => {
  it('Visit the app root url', () => {
    cy.visit('/')
    cy.get('.searcher-box__input').should('be.visible');
    cy.contains('audio').should('not.be.visible');
  })

  it('Should type some track name to search', () => {
    cy.get('.searcher-box__input').type('L')
    cy.get('.searcher-box__input').type('i')
    cy.get('.searcher-box__input').type('t')
    cy.get('.searcher-box__input').type('t')
    cy.get('.searcher-box__input').type('l')
    cy.get('.searcher-box__input').type('e')
    cy.wait(2000);
    cy.get('.searcher-box__text').first().click()
    cy.wait(2000);
    cy.get('[data-testid*="result-box--albums Little Dark Age"]').should('be.visible');
  })

  it('When album is load, if click on an album should navigate to the detail album', () => {
    cy.get('[data-testid*="result-box--albums Little Dark Age"]').first().click()
    cy.url().should('include', '/AlbumDetail/7GjVWG39IOj4viyWplJV4H')
  })

  it('After navigation, should get the album image', () => {
    cy.get('.album__image').should('be.visible')
  })

  it('should get the album name', () => {
    cy.get('.album__title').should('be.visible')
    cy.get('.album__title').contains('Little Dark Age')
  })

  it('should get the album songs', () => {
    cy.get('.album__track').should('have.length', 10)
    cy.get('.album__track').first().contains('She Works Out Too Much')
  })

})
