describe('변수와 alias', () => {
    beforeEach(() => {
        cy.visit('');
        cy.get('input').as('a');
        cy.get('p').as('a');
    });

    it('변수 잘못 사용 사례', () => {

        const input = cy.get('input');
        const p = cy.get('p'); // input이 사라짐
        const text = '안녕하세요';

        input.type(text)
            .then(() => {
               p.then($p => {
                   expect($p.text()).to.equal(text);
               })
            });

    });


    it('변수 올바른 사용 - closure, 커맨드 직렬성 사용', () => {
        cy.visit('');

        let $input, $p
        const text = '안녕하세요'

        cy.get('input').then($el => { $input = $el });
        cy.get('p').then($el => { $p = $el });

        cy.wrap($input)
            .then(() => $input)
            .type(text)
            .then(() => $p.text())
            .should('eq', text);
    });

    it.only('alias 사용', () => {
        const text = '안녕하세요'
        
        cy.get('@a').type(text);
        cy.get('@b').then($b => $b.text()).should('eq',text);
    });
});