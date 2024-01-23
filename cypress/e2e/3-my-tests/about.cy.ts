describe('About Page Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/about');
    });

    it('should navigate to about and check', () => {
        cy. url().should('include','/about');

        cy.get('h1').contains('About page')
    })
  
    it('should have an H1 tag on the About page', () => {
      cy.get('h1').should('exist');
    });
  
    it('should have an image on the About page', () => {
      cy.get('img').should('exist');
    });
  
    it('should contain a link to Kaggle dataset on the About page', () => {
      cy.get('a').contains('Kaggle Dataset website').should('have.attr', 'href').and('include', 'kaggle.com');
    });
  
    it('should navigate back to the Home page when Back to home page link is clicked', () => {
      cy.contains('Back to home page').click();
      cy.url().should('include', '/');
    });
  });
  