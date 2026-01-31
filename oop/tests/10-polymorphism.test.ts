describe('Polymorphism', () => {
    // memiliki kaitan dengan Inheritance
    // sebuah konsep untuk kemampuan merubah bentuk menjadi objek dari turunan-nya
    class Employee {
        public role: string = "Employee";
        constructor(public name: string) {
            
        }
    }
    class Manager extends Employee {
        public role: string = "Manager";
    }
    class VicePresident extends Manager {
        public role: string = "Vice President";
    }
    
    it('should support polymorphism', () => {
        // misalnya suatu variabel berisi class parent dapat 'berubah bentuk' ke tipe child, tetapi dengan tipe yg harus kompatibel/sama dengan parent (yakni string)
        let employee: Employee = new Employee("Dimas");
        console.info(employee);
        
        employee = new Manager("Dimas");
        console.info(employee);
        
        employee = new VicePresident("Dimas");
        console.info(employee);
    })

    it('should support method-polymorphism', () => {
        // kita dapat mengirim tidak hanya object-nya tetapi juga turunan-turunannya ke suatu function
        // *selama child-nya mengikuti 'format' parent
        // meskipun parameter yg diterima "Employee" (parent), namun dapat mengirim data turunan-turunannya termasuk parent sendiri

        // data = employee (base)
        function sayHello(data: Employee): void {
            console.info(`Hello ${data.name}! I am ${data.role}.`);
        }

        sayHello(new Employee("Dimas"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Samid"));
    })
})