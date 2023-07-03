// https://docs.cypress.io/api/introduction/api.html

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('To get album info ', () => {
  it('Visit the app root url', () => {
    
    cy.visit('/')
    cy.get('.searcher-box__input').should('be.visible');
    cy.contains('audio').should('not.be.visible');
  })

  it('Should type some album name to search', () => {
    cy.get('.searcher-box__input').type('J')
    cy.get('.searcher-box__input').type('u')
    cy.get('.searcher-box__input').type('i')
    cy.get('.searcher-box__input').type('c')
    cy.get('.searcher-box__input').type('y')
    cy.get('.searcher-box__input').type(' - 2007 Remaster')
    cy.wait(2000);
    cy.get('.searcher-box__text').first().click()
    cy.get('[data-testid*="result-box--tracks Juicy - 2007 Remaster"]').should('be.visible');
  })

  //Cant click on track because because track plays and cypress has problems with sound
  // it('When album is load, if click on an album should navigate to the detail album', () => {
  //   cy.get('[data-testid*="result-box--tracks Juicy - 2007 Remaster"]').first().click()
  // })

  // it('After navigation, should get the album image', () => {
  //   cy.contains('audio').should('be.visible');
  // })



})
