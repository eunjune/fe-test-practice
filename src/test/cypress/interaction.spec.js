describe('상호작용 테스트', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('버튼 클릭시 박스는 회색이 된다 ', () => {
        cy.wait(1000);

        // 상호작용 대상이 뷰포트에 보이지 않으면 자동으로 그 위치까지 스크롤해서 상호작용 한다
        // 스크롤 해서도 못찾으면 assertion fail
        // click이 일어나는 순간 스크롤이 발생
        cy.get('.btn').click();
        cy.get('.box').should('have.class','grey')
    });

    it.only('display: none;', () => {
        cy.get('.invisible_by_display').click();
        cy.get('.box').should('have.class','grey');
    });

    it.only('opacity 0 is visible??', () => {
        cy.get('.opazero').click();
        cy.get('.opazero').should('not.be.visible');
    });
});
