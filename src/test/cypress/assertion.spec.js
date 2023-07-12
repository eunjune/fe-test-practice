describe('assertion', () => {
    it('default assertion  ', () => {
        cy.visit('');
        cy.get('button'); // 내부적으로 assertion이 내장됨
    });

    it('explicit assertion  ', () => {
        cy.visit('');
        cy.get('p').then($p => {
            expect($p.hasClass('red')).to.equal(true);
            expect(!!$p.attr('data-color')).to.equal(true);
        });

    });

    it('implicit assertion  ', () => {
        cy.visit('');
        cy.get('p')
            .should('have.class','red')
            .and('have.attr', 'data-color');

    });

    // 콜백 구현시 멱등성을 고려해야 함
    it('implicit assertion - should callback  ', () => {
        cy.visit('');
        cy.get('p').should($p => {
            expect($p.hasClass('red')).to.equal(true);
            expect(!!$p.attr('data-color')).to.equal(true);
        });

    });

});