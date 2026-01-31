describe('Interface Inheritance', () => {
    interface hasName {
        name: string;
        age?: number;
    }

    interface canSayHi {
        sayHi(name: string): void;
    }

    // ketika ingin membuat class yg berisi kontrak/sifat dari interface "hasName" dan "canSayHi" maka harus mewajibkan ada atribut yg sama dengan kedua interface tersebut

    class Person implements hasName, canSayHi {
        // wajib sesuai dengan atribut hasName & canSayHi
        name: string;
        age?: number;

        constructor(name: string, age?: number) {
            this.name = name;
            if (age) {
                this.age = age;
            }
        }

        sayHi(name: string): void {
            if (!this.age) {
                console.info(`Hello ${name}, my name is ${this.name}!`);
            } else {
                console.info(`Hello ${name}, my name is ${this.name} in age ${this.age}th!`);
            }
        }
    }

    it('should support "implements" in interface', () => {
        const person1 = new Person("dimas", 12);
        person1.sayHi("PZN")
        
        const person2 = new Person("samid")
        person2.sayHi("PZN")
    })
})