describe('Class Relationship', () => {
    class Student {
        constructor(public name: string) {
            
        }
    }
    class Lecturer {
        constructor(public name: string) {

        }
    }

    it('Student & Lecturer Class type are should same', () => {
        // sifat di TS dimana suatu class ketika mendefinisikan tipe datanya yg properti & method-nya serupa dengan class lain itu kompatibel
        // karena pada JS keduanya akan diconvert ke tipe object, namun tidak best-practice
        const student: Lecturer = new Student("dimas")
        const lecturer: Student = new Lecturer("samid")
        console.info(student === lecturer);
    })
})