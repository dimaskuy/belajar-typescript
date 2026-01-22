describe("Type Alias", function () {
    it("should support in typescript", function () {
        // MEMBUAT SUATU KEY YANG BERISI VALUE SUATU TIPE DATA DALAM SEBUAH OBJECT (dlm hal ini kita import dari module/file "6-alias.ts", tetapi bisa langsung menuliskannya dlm satu file)
        // AKAN DIUBAH KE OBJECT BIASA DALAM JS
        // DAPAT MELAKUKAN UNION TYPE (dlm hal ini string | number pada id)
        // BIASA DIGUNAKAN PADA LOGIC/STATE/HELPER
        // type Cat = {
        //   id: ID;
        //   name: string
        //   desc?: string  // OPTIONAL PERAMETER (JIKA TIDAK ADA MAKA UNDEFINED)
        // }
        const category = {
            id: "1",
            name: "Camera/Webcam",
            desc: "Ini adalah optional value dari key 'desc'",
        };
        const product = {
            id: 1,
            name: "Webcam 4k",
            price: "300000",
            category: category,
        };
        const fakeID = "100";
        console.info(category);
        console.info(product);
        console.log(fakeID);
    });
});
export {};
//# sourceMappingURL=6-alias.test.js.map