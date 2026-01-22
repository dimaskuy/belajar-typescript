describe("Optional Paramter | Null & Undefined", function () {
    it("should support null and undefined in typescript", function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}!`);
            }
            else {
                console.info("Hello.");
            }
        }
        sayHello("Dimas");
        const name = undefined;
        sayHello(name);
        // UNDEFINED seperti bypass tipe datanya, karena dia tidak ada isinya (ini seperti kita tidak menambahkan apa-apa pada optional param.)
        sayHello(null);
        // NULL merupakan tipe data, sehingga !== undefined
    });
});
export {};
//# sourceMappingURL=9-null&undefined.test.js.map