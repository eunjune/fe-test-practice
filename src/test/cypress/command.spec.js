describe('커맨드 체인', () => {
    it('커맨드 체인의 직렬성 확인',() => {

        cy.visit('');

        /*
        * cy 함수는 사실상 함수가 실행되는게 아니라 커맨드 체인에 쌓이는 것임
        * jquery를 써버리면 cy 함수 실제 동작이 돌기전에 jquery가 동작함
        * 그래서 이런 경우 wrap으로 감싸야 함
        * */
        cy.wrap()
            .then(() => Cypress.$('.btn').trigger('click'));

        cy.get('p').should('have.class','red');
    });

    it.only('Subject', () => {
        const one = cy.wrap(1);
        const two = cy.wrap(2);

        one.should('eq',2);
    });
});

describe('커스텀 커맨드 사용', () => {
    it('커스텀 커맨드 사용',() => {

        cy.visit('');

        cy.clickJQuery('.btn');

        cy.get('p').should('have.class','red');
    });

    it.only('Subject', () => {
        const one = cy.wrap(1);
        const two = cy.wrap(2);

        one.should('eq',2);
    });
});