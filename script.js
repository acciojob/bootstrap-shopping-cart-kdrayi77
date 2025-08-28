cy.wait(2000); // wait 2s for rendering
cy.get('.row').should('exist');
