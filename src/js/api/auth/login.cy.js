describe('login', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#registerForm').within(() => {
      cy.get('[data-auth="login"]').click();
    });
    cy.wait(500);
    cy.get('#loginForm').within(() => {
      cy.get('input#loginEmail').type('MarChr60640@stud.noroff.no', {
        delay: 50,
      });
      cy.get('input#loginPassword').type('Mammamia123', { delay: 50 });
      cy.get('button[type=submit]').click({ waitForAnimations: 500 });
    });

    cy.contains('Logout').should('be.visible');
    cy.contains('Mariusc88').should('exist');
  });

  it('Rejects login with invalid credentials', () => {
    cy.visit('/');
    let alertedText = null;
    cy.on('window:alert', (msg) => (alertedText = msg));

    cy.wait(1000);
    cy.get('#registerForm').within(() => {
      cy.get('[data-auth="login"]').click();
    });
    cy.wait(500);
    cy.get('#loginForm').within(() => {
      cy.get('input#loginEmail').type('foo@stud.noroff.no', { delay: 50 });
      cy.get('input#loginPassword').type('password123', { delay: 50 });
      cy.get('button[type=submit]').click({ waitForAnimations: 500 });
    });

    cy.wait(1000);

    cy.then(() =>
      expect(alertedText).to.equal(
        'Either your username was not found or your password is incorrect'
      )
    );
  });
});
