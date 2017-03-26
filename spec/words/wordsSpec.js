describe("counting words", function () {
    let words = require("../../src/words/words");

    it("should count words successfully", function () {
        let inputWords = ["one","three","two","three","two","three"];

        let expectedResult = new Map([["one",1],["three",3],["two",2]]);

        expect(words.countWords(inputWords)).toEqual(expectedResult)
    });
});



