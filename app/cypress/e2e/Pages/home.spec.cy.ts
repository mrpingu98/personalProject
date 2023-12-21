describe('Homepage', () => {
    it('should visit the homepage and check correct text is viewable', () => {
      cy.visit('/');
      cy.get('[data-test-id="home-title"]').contains('Welcome');
      cy.get('[data-test-id="home-description"]').contains("Yello, this is my swazzling website I've created. Click around and find out.")
    });
  });

  describe('Homepage navbar', () => {
    it('should visit homepage, and check correct elements in navbar are showing', () => {
      cy.visit('/');
      cy.contains('button', 'Muzik');
      cy.contains('button' , 'Home');
      cy.contains('button', 'My Profile')
      cy.contains('button', 'Merch')
    })
  })