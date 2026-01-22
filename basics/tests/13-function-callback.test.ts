describe("Function Sebagai Parameter", function () {
    it("should support Callback Function in typescript", function () {
        // ini biasa ketika memebutuhkan callback function
        // PADA PARAMETER YANG BERUPA FUNCTION, KITA PERLU BERI TAHU BAHWA PARAMETER INI ADALAH FUNCTION
        // dapat menggunakan function interface, atau bisa menyebutkan pada parameter-nya yakni jumlah parameter dan return value function yg dibutuhkan

        // parameter "filter" ingin berisi function, maka deklarasi tipe nya berupa: (value: <tipedata>) => <tipedata>
        // => : tipe data expect dari return value
        function sayName(name: string, filter?:(value: string) => string): string {
            if (filter) {
                return `Hello, ${filter(name)}! (succeed calling callback.)`;
            } else {
                return `Hello, ${name}! (no callback)`;
            }
        }
        // function pada parameter "filter" dari "sayName", pastikan tipe data parameter & return value nya cocok
        function upperName(value: string): string {
            return value.toUpperCase();
        }

        const succeedMsg: string = "Hello, DIMAS! (succeed calling callback.)";
        console.info(sayName("dimas"));
        expect(sayName("dimas", upperName)).toBe(succeedMsg);

        // dapat menggunakan ANONYMOUS FUNCTION dalam parameter secara langsung
        expect(sayName("dimas", function(name: string): string {
            return name.toUpperCase();
        })).toBe(succeedMsg);
        // atau ARROW FUNCTION untuk lebih ringkas
        expect(sayName("dimas", (name: string): string => name.toUpperCase())).toBe(succeedMsg);
    });
})
