describe('셀렉트 테스트', () => {
    beforeEach(() => {
        cy.visit(''); // 페이지 방문
    })

    it('요소 가져오기', () => {
        cy.get('.btn').click(); // 요소 가져옴
        cy.get('p').should('have.class', 'red');
    });

    it('jQuery 사용', () => {
        cy.wait(4000).then(() => {
            Cypress.$('.bin').trigger('click');
        });

        cy.get('p').should('have.class', 'red');
    });

    it.only('텍스트를 이용해서 요소 가져오기', () => {
        cy.get('body').click();
        cy.get('body').contains('클릭시 색이 변합니다.').should('have.class','red');
    });

    it.only('find 써보자', () => {
        cy.get('body').click();
        cy.get('body').find('p').;
    });
});
