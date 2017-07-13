'use strict';

describe('fizzbuzz', () => {
    it("when it is 3's multiple", () => {
       let  inputs=6;
       let professedInputs = FirstRules(inputs);
       const result= "fizz";
     expect(professedInputs).toEqual(result);
    });
    it("when it is 5's multiple", () => {
        let inputs=10;
        let professedInputs = FirstRules(inputs);
        const result= "buzz";
        expect(professedInputs).toEqual(result);
    });
    it("when it is 7's multiple", () => {
        let inputs=14;
        let professedInputs = FirstRules(inputs);
        const result= "wizz";
        expect(professedInputs).toEqual(result);
    });
    it("when it is both 3's and 5's multiple", () => {
        let inputs=15;
        let professedInputs = FirstRules(inputs);
        const result= "fizzbuzz";
        expect(professedInputs).toEqual(result);
    });
    it("when it is both 3's and 7's multiple", () => {
        let inputs=21;
        let professedInputs = FirstRules(inputs);
        const result= "fizzwizz";
        expect(professedInputs).toEqual(result);
    });
    it("when it is both 5's and 7's multiple", () => {
        let inputs=70;
        let professedInputs = FirstRules(inputs);
        const result= "buzzwizz";
        expect(professedInputs).toEqual(result);
    });
    it("when it is both 3's and 5's and 7's multiple", () => {
        let inputs1=105;
        let inputs2=210;
        let professedInputs = FirstRules(inputs1);
        const result= "fizzbuzzwizz";
        expect(professedInputs).toEqual(result);
        expect(FirstRules(inputs2)).toEqual(result);
    });
    it("when it includes 3", () => {
        let  inputs=13;
        let professedInputs = FirstRules(inputs);
        const result= "fizz";
        expect(professedInputs).toEqual(result);
    });
    it("when it doesn't fit all", () => {
        let  inputs=11;
        let professedInputs = FirstRules(inputs);
        const result= inputs;
        expect(professedInputs).toEqual(result);
    });
});
