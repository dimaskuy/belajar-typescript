describe("Conditional (If-else, Ternary, Switch-case)", function () {
    it("should support If Else & Ternary in typescript", function () {
        const value = 90;
        // *tak perlu definisikan tipe, karena TS sudah mendefinisikannya & tipe data akan di-lock
        // value = "dimas" // error!
        // IF, ELSE, ELSE-IF
        if (value > 80) {
            console.info("Bagus");
        }
        else if (value > 60) {
            console.info("Lumayan");
        }
        else {
            console.info("Coba Lagi");
        }
        // TERNARY OPERATOR
        const val = 84;
        const msg = val >= 75 ? "Selamat" : "Coba Lagi";
        console.info(msg);
    });
    it("should support Switch-Case in typescript", function () {
        function sayToEveryone(name) {
            switch (name) {
                case "Dimas":
                    return "Howdy Dimas.";
                case "WPU":
                    return "Hai WPU!";
                case "Eko":
                    return "Halo Eko..";
                default:
                    return "Hello.";
            }
        }
        expect(sayToEveryone("Dimas")).toBe("Howdy Dimas.");
    });
});
export {};
//# sourceMappingURL=14-conditional.test.js.map