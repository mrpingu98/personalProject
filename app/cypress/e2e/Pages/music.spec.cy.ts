describe('Music with spotify unauthorised', () => {
    it('Authorisation text should be displayed, Your Spotify button should be disabled', () => {
      cy.visit('/music');
      cy.get('[data-test-id="unauthorised-spotify-description"]');
      cy.contains('button','Your Spotify').should('be.disabled');
    });
  });

  describe('Music with spotify authorised', () => {
    it('Your Spotify button should be clickable, titles for song lists should be viewable', () => {
      cy.visit('/');
      cy.window().then((win) => {
        win.localStorage.setItem('access_token', 'testtoken')
      })
      cy.contains('button', 'Muzik').click();
      cy.get('[data-test-id="music-title"]');  
      cy.get('[data-test-id="dnb-title"]').contains('Dnb');
      cy.get('[data-test-id="rock-title"]').contains('Rock')
      cy.contains('button', 'Your Spotify').should('not.be.disabled')
    });
  });

  //can't get it to pick up the disabled button... look into how to do 
  //edit - use contains, and specify to look for a button with certain text 
  //doesnt seem to pickup ids on components that ive made, e.g. PrimaryButton - either have to put id on the mui button itself in the component, or find it using contains instead
  //look at how to set the local storage so the page can be shown when you've authorised yourself 