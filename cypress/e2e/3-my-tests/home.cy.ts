describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display the background color', () => {
        cy.get('.min-h-screen').should('have.css', 'background-color', 'rgb(243, 244, 246)');
    });

    it('should change background color to light-red on button click', () => {
        cy.contains('Change to light-red background').click();
        cy.get('.min-h-screen').should('have.css', 'background-color', 'rgb(254, 202, 202)');
    });

    it('should change background color to light-blue on button click', () => {
        cy.contains('Change to light-blue background').click();
        cy.get('.min-h-screen').should('have.css', 'background-color', 'rgb(191, 219, 254)');
    });

    it('should have two buttons on the page', () => {
        cy.get('button').should('have.length', 2);
    });

    it('should navigate to About page when About Page link is clicked', () => {
        cy.contains('About Page').click();
        cy.url().should('include', '/about');
    });

    it('should have an H1 tag on the page', () => {
        cy.get('h1').should('exist');
    });

    it('should have a header on the page', () => {
        cy.get('header').should('exist');
    });

    it('should have a footer on the page', () => {
        cy.get('footer').should('exist');
    });

    it('should contain an image with alt attribute on the page', () => {
        cy.get('img').should('have.attr', 'alt').and('not.be.empty');
    });
});
