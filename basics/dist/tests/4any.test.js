describe("Any", function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "Dimas RS",
            age: 20
        };
        person.age = 30;
        person.address = "Indonesia";
        console.info(person);
        // MORE STRICT:
        // const person: {
        //   id: number;
        //   name: string;
        //   age: number;
        //   address: string;
        // } = {
        //   id: 1,
        //   name: "Dimas RS",
        //   age: 20,
        //   address: "",
        // };
    });
});
export {};
//# sourceMappingURL=4any.test.js.map