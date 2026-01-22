import { CustomerClass } from "../src/8-enum";
describe("Type Enum", function () {
    it("should support in typescript", function () {
        // ENUM: NILAI PASTI, KETIKA SUATU KEY DIISI HARUS BERDASAR PADA SUATU VALUE DARI TYPE ENUM KITA, TERMASUK KEY ITU OPTIONAL
        const customer = {
            id: 1,
            name: "Dimas",
            type: CustomerClass.GOLD // pemanggilan enum (yakni string "GOLD" yg merujuk pada type CustomerClass)
        };
        console.info(customer);
    });
});
//# sourceMappingURL=8-enum.test.js.map