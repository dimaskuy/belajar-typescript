describe("Interface", function () {
    it("should support in typescript", function () {
        // SITNAKS MIRIP DENGAN TYPE, INTERFACE DIGUNAKAN JIKA DATA YANG DISIMPAN ADALAH OBJECT/API
        // TIDAK BISA PAKAI UNION (... | ...)
        // READONLY: Value dlm object tidak bisa dirubah setelahnya utk melindungi sebuah atribut
        const mhs = {
            id: 1,
            name: "Dimas Ramadhan",
            nim: "112223333444",
            nik: "1234567890"
        };
        mhs.name = "Dimas Ramadhan S";
        // mhs.nim = "dont change it!"
        // mhs.nik = "dont change it!"
        console.log(mhs);
    });
    // 2). FUNCTION INTERFACE
    it('should support Function interface', function () {
        // referensi dari interface function, sehingga parameter terlihat seperti nulis 2x
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    // 3). INDEXABLE
    it('should support Indexable interface', function () {
        const dictionary = {
            "name": "Dimas",
            "address": "Surabaya"
        };
        const names = ["Dimas", "Ramadhan", "S"];
        // dapat juga object seperti array
        const names2 = {
            0: "Dimas",
            1: "Ramadhan",
            3: "S"
        };
        console.info(names[0], names2[0]);
        console.info(dictionary["name"], dictionary["address"]);
    });
    // 3). EXTENDABLE
    it('should support Extends interface', function () {
        // semua yang dimiliki oleh interface "Employee" juga kebawa ke interface yg kita extend, "Manager"
        const employee = {
            id: 1,
            name: "Dimas",
            division: "IT"
        };
        const manager = {
            id: 1, // atribut wajib jika yg kita extend juga wajib
            name: "Ramadhan",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(employee, manager);
    });
    // 4). FUNCTION/METHOD IN INTERFACE
    it('should support Method in interface', function () {
        // function(key: <tipedata>): <tipedata return>
        const person = {
            name: "Dimas",
            sayHello: function (name) {
                return `Howdy, ${name}! Mine is ${this.name}.`;
            }
        };
        console.info(person.sayHello("Kurniawan"));
    });
    // 4). INTERSECTION IN INTERFACE
    it('should support Intersection in interface', function () {
        const final = {
            name: "Dimas",
            id: 12,
            address: "Surabaya"
        };
        console.info(final);
    });
    // 4). ASSERTION IN INTERFACE
    it('should support Assertions in interface', function () {
        // MENGONVERSI SESUATU DARI TIPE DATA "ANY"
        const person = {
            name: "Dimas",
            age: 20
        };
        // akan mengecek atribut "person" dengan "Person"
        const person2 = person;
        // person2.age = 20 /* ERROR: Karena method sayHello tdk ada di 'Person' */
        // person2.sayHello("Budi") /* ERROR (di console): Karena method sayHello tdk ada di 'person' */
        console.info(person2);
    });
});
export {};
//# sourceMappingURL=10-interface.test.js.map