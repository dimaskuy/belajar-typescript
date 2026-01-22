describe("Function Overloading", function () {
    it("should support Function Overloading in typescript", function () {
        // KEMAMPUAN MEMBUAT FUNCTION DENGAN NAMA YANG SAMA NAMUN PARAMETER INPUT YANG BERBEDA
        // di JS, membuat function seperti ini tidak aman karena menghasilkan berbeda-beda tipe data. sehingga, di TS punya fitur tersendiri untuk lebih aman dilakukan

        // membuat function dengan definisikan tipe data parameter & return value
        function callMe(value: string): string;
        function callMe(value: number): number;

        // implementasi function-nya
        // tipe data "any" karena function (dgn nama yg sama) memiliki tipe data parameter & return value yg beragam
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value*value
            }
        }

        expect(callMe("dimas")).toBe("DIMAS");
        expect(callMe(5)).toBe(25);
    });
})
