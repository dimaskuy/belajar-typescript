describe('Inheritance', () => {
    // parent
    class Student {
        id: number;
        name: string;
        isActive: boolean;

        constructor(id: number, name: string, isActive: boolean) {
            this.id = id;
            this.name = name;
            this.isActive = isActive;
        }
    }

    enum STATUS {
        TETAP = "TETAP",
        HONORER = "HONORER"
    }

    // turunan ke-1: class "Lecturer" akan mewariskan dari class "Student"
    class Lecturer extends Student {
        // tambahan atribut
        employeeID: number;
        status: string;

        // jika kita memiliki atribut baru berbeda dgn parent, maka kita wajib menggunakan "super(atribut)" utk mendefinisikannya di bawah constructor
        constructor(id: number, name: string, isActive: boolean, employeeID: number, status: string) {
            super(id, name, isActive); // ini akan mengacu pada constructor milik parent
            this.employeeID = employeeID;
            this.status = status; 
        }
    }

    // turunan ke-2: class "Staff" akan mewariskan dari class "Lecturer"
    class Staff extends Lecturer {
        manager: string;
        constructor(id: number, name: string, isActive: boolean, employeeID: number, status: string, manager: string) {
            super(id, name, isActive, employeeID, status);
            this.manager = manager;
        }
    }

    it('should support inheritance', () => {
        const student = new Student(1, "Dimas", true);
        console.info(student);

        const lecturer = new Lecturer(2, "Samid", true, 100, STATUS.TETAP);
        console.info(lecturer);

        const staff = new Staff(2, "Chill", false, 200, STATUS.HONORER, "Eko");
        console.info(staff);
    })
})