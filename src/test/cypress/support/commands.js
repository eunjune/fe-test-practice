Cypress.Commands.add('clickJQuery', (selector) => {
    cy.wrap().then(() => {
        Cypress.$(selector).trigger('click');
    });
});