describe('e2e test', () => {
  it('Loads home page correctly', () => {
    cy.intercept(
      { method: 'POST', url: 'http://*' },
      { fixture: 'homePage.json' }
    ).as('getHomeCards');

    cy.visit('http://localhost:3000/');
    cy.wait('@getHomeCards');

    cy.contains('Welcome!');
  });
  it('Loads quiz page correctly', () => {
    cy.intercept(
      { method: 'POST', url: 'http://*' },
      { fixture: 'quizPage.json' }
    ).as('getQuizCards');

    cy.contains('Begin Quiz').click();
    cy.wait('@getQuizCards');

    cy.contains('Order 66');
  });
  it('Navigates through quiz page and displays results correctly', () => {
    cy.intercept(
      { method: 'POST', url: 'http://*' },
      { fixture: 'resultsPage.json' }
    ).as('getResults');
    cy.get('button').each(($item) => {
      $item.trigger('click');
    });
    cy.wait('@getResults');
    cy.contains('You scored 6/18');
  });
  it('Returns to home page correctly', () => {
    cy.intercept(
      { method: 'POST', url: 'http://*' },
      { fixture: 'homePage.json' }
    ).as('returnToHomePage');
    cy.contains('Back to homepage').click();
    cy.wait('@returnToHomePage');
    cy.contains('Welcome!');
  });
});
