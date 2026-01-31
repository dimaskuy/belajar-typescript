describe('Static', () => {
    // keyword di class pada properties/method yg menjadikan global variabel/function yg bisa diakses langsung tanpa membuat object dari class-nya, dan bukan lagi bagian dari class tersebut
    // biasanya utk utility/helper

    // static member hanya dapat akses static member lain, tidak bisa non-static kecuali dari object. namun non-static member dapat akses static member
    class Config {
        static NAME: string = "Tweaks your own number!";
        static VERSION: string = "1.0.0";
        static factorial(n: number): number {
            if (n > 0 && n <= 1) {
                return 1;
            }
            return n * this.factorial(n-1)
        }
        static sum(...nums: number[]): number {
           let total = 0;
           for (let num of nums) {
                total += num;
           }
           return total;
        }
    }

    it('should support static keyword in class', () => {
        // tidak perlu deklarasi class dahulu memakai "new"
        console.info(Config.NAME);
        const myFactorial = Config.factorial(5);
        console.info(myFactorial); 
        console.info(Config.sum(1,2,3)); 
    })
})