describe('Properties', () => {
    // global class
    class Customer {
        readonly id: number = NaN;
        name: string = "Guest"; // default value
        age?: number;

        constructor(id: number, name: string) { // method yg dipanggil pertama kali
            this.id = id
            this.name = name
        }
        
        sayHi(name: string): void { // tidak me-return apapun
            console.info(`Hello ${name}, my name is ${this.name} with ID: ${this.id}.`);
        }
    }

    it('should can create a properties & their fields', () => {
        const dimas: Customer = new Customer(1, "Dimas");
        dimas.age = 20;

        console.log(dimas.id);
        console.log(dimas.name);
        console.log(dimas.age);
        console.info(dimas);

        // default value
        class CstmrDefault {
            id: number = NaN;
            name: string = "Guest";
            // constructor(id: number, name: string) {
            //     this.id = id
            //     this.name = name
            // }
        }

        // -> default value
        const guest: CstmrDefault = new CstmrDefault();
        console.info(guest);
        guest.name = 'samid';
        guest.id = 11;
        console.info(guest);
    })
    
    // method/function
    it('should can have methods', () => {
        const customer: Customer = new Customer(1, "dimas");
        customer.sayHi("Samid");
    })
})