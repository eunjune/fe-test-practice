describe("group comment", () => {

    beforeEach(() => {

    });

    test("a equal 1", () => {
        var a = 0;

        expect(a).toBe(1);


    });

    test("test fail", () => {
        throw new Error();
    });

    test.each([10,1])("repeat test", () => {

    })


    test("dom test", () => {
        expect("").toContainHTML("+");
    });

});


