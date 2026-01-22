describe("Union Type", function () {
    it("should support in typescript", function () {
        let sample = "Dimas";
        console.info(sample);
        sample = 10;
        console.info(sample);
        sample = true;
        console.info(sample);
        sample = ["hello", true];
        console.info(sample);
        //   sample = {}
        //   METHOD AGAR LEBIH AMAN DGN PROCESSING UNION TYPE
        // function process(value: string | number | boolean) {
        //     if (typeof value === "string") {
        //       return value.toUpperCase();
        //     } else if (typeof value === "number") {
        //       return value + 2
        //     } else {
        //       return !value
        //     }
        // }  
        // const result = process("hello") // -> HELLO
    });
});
export {};
//# sourceMappingURL=5union-type.test.js.map