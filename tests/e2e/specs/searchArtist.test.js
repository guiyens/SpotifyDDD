// https://docs.cypress.io/api/introduction/api.html

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('To get artist info', () => {
  it('Should visits the app root url', () => {
    cy.visit('/')
    cy.get('.searcher-box__input').should('be.visible');
    cy.contains('audio').should('not.be.visible');
  })

  it('Should type some artist to search', () => {
    cy.get('.searcher-box__input').type('D')
    cy.get('.searcher-box__input').type('e')
    cy.get('.searcher-box__input').type('l')
    cy.get('.searcher-box__input').type('a')
    cy.get('.searcher-box__input').type('o')
    cy.get('.searcher-box__input').type('s')
    cy.get('.searcher-box__input').type('s')
    cy.get('.searcher-box__input').type('a')
    cy.wait(2000);
    cy.get('.searcher-box__text').first().click()
    cy.wait(2000);
    cy.get('[data-testid*="result-box--artists Delaossa"]').should('be.visible');
  })

  it('When artist is loaded, click on a artist and should navigate to artist detail', () => {
    cy.get('[data-testid*="result-box--artists Delaossa"]').first().click()
    cy.url().should('include', '/ArtistDetail/5Uox3n7m4W2CoM9MmHPJwQ')
  })

  it('After navigation, should get the artist genre', () => {
    cy.get('.artist__genre-container').should('be.visible')
  })

  it('should get the artist image', () => {
    cy.get('.artist__image').should('be.visible')
  })

  it('should get the artist name', () => {
    cy.get('.artist__name').should('be.visible')
  })

  it('should get the artist albums', () => {
    cy.get('.artist__album').should('have.length', 20)
  })

  it('You will navigate to an album detail', () => {
    cy.get('[data-testid*="Un Perro Andaluz"]').first().click()
    cy.url().should('include', '/AlbumDetail/08Pq65v9n2sUoJYLQPGhC8')
  })
})
