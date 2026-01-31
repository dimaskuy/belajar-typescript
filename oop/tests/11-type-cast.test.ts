describe('Type Cast', () => {
    // Ploymorphism: sebuah konsep untuk kemampuan merubah bentuk menjadi objek dari turunan-nya
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

    it('should support type cast', () => {
        // TYPE CAST
        // type assertions: dimana kita mengubah tipe data dari satu tipe data ke tipe data lainnya yg lebih spesifik
        // pada method polymorphism, kita dapat kombinasikan instanceof dan assertions utk mengubah setiap tipe data-nya
        // struktur harus dari child terendah hingga ke parent atas paling atas

        // data = employee (base)
        function sayHello(data: Employee): void {
            // instanceof selain mengecek apakah objek nya sendiri dari asalnya, tetapi juga mengecek apakah suatu objek itu merupakan turunannya
            if (data instanceof VicePresident) {
                const vp = data as VicePresident;
                console.info(`Hello VP, ${vp.name}.`);
            } else if (data instanceof Manager) {
                const manager = data as Manager;
                console.info(`Hello Manager, ${manager.name}.`);
            } else {
                // jika memang object employee tidak ada di keduanya
                console.info(`Hello Employee, ${data.name}.`);
            }
        }

        sayHello(new Employee("Dimas"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Samid"));
    })
})