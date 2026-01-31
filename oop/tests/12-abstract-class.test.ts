describe('Abstract Class', () => {
    // merupakan deklarasi Class yg belum selesai sehingga tidak dapat menggunakan keyword "new"
    // dapat memiliki properties/method yg belum dipanggil/diimplementasi
    // digunakan sebagai Parent yg akan diturunkan ke Child-nya

    // ABSTRACT
    abstract class Student {
        readonly id: number; // wajib diisi, bukan prop. abstract
        protected abstract name: string;
        
        constructor(id: number) {
            this.id = id;
        }

        abstract sayHi(name: string): void; // method hanya didefinisikan, bukan diimplementasikan
    }

    // IMPLEMENTATION CLASS
    class realStudent extends Student {
        // setiap properti yg abstract harus dideklarasikan ulang sesuai detail-nya
        name: string; 

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHi(name: string): void {
            console.info(`Hello ${name}, meet our student ${this.name}!`);
        }
    } 

    it('should support abstract class', () => {
        const dimas = new realStudent(1, "dimas");
        console.info(dimas);
    })
})