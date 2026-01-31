describe('Parameter Properties/Visibility', () => {
    class Person {
        // jika kita membuat property/atribut dalam class dan constructor sebagai set value property, maka kita dapat persingkatnya dengan keyword visibility di constructor
        // name: string;

        constructor(public name: string) {
            // this.name = name;
        }
    }


    it('should support parameter properties', () => {
        const person = new Person("dimas");
        console.info(person.name);
    })
})