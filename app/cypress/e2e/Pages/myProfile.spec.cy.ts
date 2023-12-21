describe('My profile with spotify unauthorised', () => {
    it('Authorise button should be clickable', () => {
      cy.visit('/myProfile');
      cy.get('[data-test-id="myprofile-title"]').contains('My Profile');
      cy.get('[data-test-id="myprofile-spotify-title"]').contains('Spotify Authorisation');
      cy.get('[data-test-id="unauthorised-description"]').contains('To view the music sections')
      cy.contains('button', 'Authorise');
    });
  });

  describe('My Profile with spotify authorised', () => {
    it('should visit the My Profile page and check the Authorise button is disabled ', () => {
      cy.visit('/');
      cy.window().then((win) => {
        win.localStorage.setItem('access_token', 'testtoken')
      })
      cy.contains('button', 'My Profile').click();
      cy.contains('button', 'Authorise').should('be.disabled')
      cy.get('[data-test-id="authorised-description"]').contains('You have authorised')
    });
  });
