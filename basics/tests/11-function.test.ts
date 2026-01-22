describe("Function", function () {
    // 1). FUNCTION
    it("should support Function in typescript", function () {
        // SAMA SEPERTI DI JS, NAMUN DI TS KITA HARUS MENENTUKAN/EXPECT TIPE DATA DARI PARAMETER & RETURN VALUE-NYA
        // JIKA TIDAK MENGEMBALIKAN APAPUN, MAKA TIPE DATA RETURN VALUE NYA ADALAH "void"
        
        function sayName(name: string): string {
            return `Hello, ${name}!`
        }
        // console.info(sayName("Dimas"));
        expect(sayName("Dimas")).toBe("Hello, Dimas!");
        
        function sayNothing(): void {
            console.info("Berhasil memanggil function void!");
        }
    });

    // 2). FUNCTION PARAMETER
    it("should support Parameter Function in typescript", function () {
        // JUGA MEMILIKI PERILAKU REST PARAMETER HINGGA DEFAULT VALUE
        // SETIAP PARAMETER WAJIB DIISI, KECUALI PAKAI PARAMETER OPSIONAL (MENGGUNAKAN "?")
        
        // default parameter 
        function sayHello(name: string = "Guest"): string {
            return `Hello, ${name}!`
        }
        expect(sayHello()).toBe("Hello, Guest!");

        // rest parameter
        function sum(...values: number[]): number {
            let total: number = 0;
            for (const element of values) {
                total += element;
            }
            return total;
        }
        console.info(sum(1,2,3,4));

        // optional parameter
        function sayNameOpt(firstName: string, lastName?: string): string {
            console.info(lastName); // jika tidak diisi akan "undefined", maka kita harus cek
            if (lastName) {
                return `Hello, ${firstName} ${lastName}!`;
            } else {
                return `Hello, ${firstName}!`;
            }
        }

        console.info(sayNameOpt("Dimas"));
        expect(sayNameOpt("Dimas")).toBe("Hello, Dimas!")
    });
})
