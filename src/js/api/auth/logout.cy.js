describe('logout', () => {
  it('Clears session when logout', () => {
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

    cy.contains('Logout').click({ waitForAnimations: true });

    cy.wait(500);
    cy.get('#registerForm').should('be.visible');
  });
});
