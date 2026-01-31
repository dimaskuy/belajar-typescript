describe('Method Overriding', () => {
    // mendeklarasikan ulang method yg ada di parent-nya ke child-nya
    // boleh pakai keyword "override" (best-practice), boleh tidak
    class Employee {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi(name: string): string {
            return `Hello ${name}, my name is ${this.name}.`;
        }
    }

    class Manager extends Employee {
        // akan menimpa dari method parent
        // method harus sesuai argument atau kontrak parent (dlm hal ini child harus punya parameter "name")
        override sayHi(name: string): string {
            console.info("Employee: ", this.name);
            // jika ingin memanggil method parent asli, pakai super.parentMethod(), sama seperti keyword "this" namun konteksnya adalah parent
            return super.sayHi(name) + " And I am your manager.";

            // return `Hello ${name}, my name is ${this.name}, and I am a manager.`;
        }

    }


    it('should support method overriding', () => {
        const employee = new Employee("Budi");
        const manager = new Manager("Dimas");

        console.info(employee.sayHi("Ibud"));
        console.info(manager.sayHi("Samid"));
    })
})