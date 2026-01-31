describe('Class', () => {
    // CONSTRUCTOR: function yg pertama kali dipanggil saat memanggil Class/object dibuat
    class Customer {
        constructor() {
            console.info("Created new customer!");
        }
    }

    class Order {
        constructor() {
            console.info("Created new order!");
        }
    }


    it('should can create a class and constructor', () => {
        const customer: Customer  = new Customer();
        const order: Order  = new Order();
    })

    it('should can create a class and constructor', () => {
        new Customer();
        new Order();
    })
})