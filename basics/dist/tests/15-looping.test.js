describe("Looping", function () {
    // FOR
    it("should support For Loop in typescript", function () {
        let names = ["Dimas", "Ramadhan", "S"];
        // for i 
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        // for of
        for (const element of names) {
            console.info(element);
        }
        // for in
        for (const index in names) {
            console.info(names[index]);
        }
    });
    // WHILE LOOP
    it("should support While Loop in typescript", function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
    // DO-WHILE LOOP
    it("should support Do-While Loop in typescript", function () {
        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break; // akan berhenti
            }
            if (counter % 2 == 0) {
                continue; // akan berlanjut ke perulangan selanjutnya
            }
            console.info(counter); // print ganjil
        } while (true);
    });
    // BREAK & CONTINUE
    it("should support Break & Continue in Loop in typescript", function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
    // *TAMBAHAN*
    // semua fitur JS lainnya itu mirip jika di TS, yakni: operator matematika, perbandingan, logika, string template, chaining, with statement, default parameter, function generator, getter setter, destructuring, modules, library, dan lainnya
    // yang membedakan adalah fitur TS yg Strongly Type, kita harus menentukan & expect tipe data apa dari variabel dan parameter. namun jika ingin seperti JS dimana variabel/parameter itu bebas, maka menggunakan tipe data "any" dengan 'disiplin'
});
export {};
//# sourceMappingURL=15-looping.test.js.map