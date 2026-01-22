// meskipun interface, tetap pakai "type" saat import
import type { Mahasiswa, Employee, Manager, Person } from "../src/10-interface";

describe("Interface", function () {
  it("should support in typescript", function () {
    // SITNAKS MIRIP DENGAN TYPE, INTERFACE DIGUNAKAN JIKA DATA YANG DISIMPAN ADALAH OBJECT/API
    // TIDAK BISA PAKAI UNION (... | ...)

    // READONLY: Value dlm object tidak bisa dirubah setelahnya utk melindungi sebuah atribut
    const mhs: Mahasiswa = {
        id: 1,
        name: "Dimas Ramadhan",
        nim: "112223333444",
        nik: "1234567890"
    }

    mhs.name = "Dimas Ramadhan S"
    // mhs.nim = "dont change it!"
    // mhs.nik = "dont change it!"

    console.log(mhs);
  });

// 2). FUNCTION INTERFACE
  it('should support Function interface', function () {
    interface addFunction {
        // (..parameter): <tipe data return value-nya>
        (value1: number, value2: number): number;
    }

    // referensi dari interface function, sehingga parameter terlihat seperti nulis 2x
    const add: addFunction = (value1: number, value2: number): number => {
        return value1 + value2
    }

    expect(add(2,2)).toBe(4)
  })

// 3). INDEXABLE
  it('should support Indexable interface', function () {
    // representasi object indexable (key & value) seperti array, tetapi lebih spesifik ke tipe data tertentu
    interface StringArray {
        [index: number]: string;
        // [index: <tipedata(number)>]: <tipedata_dari_value>
    }

    // non-number index (object)
    interface StringDictionary {
        [key: string]: string;
        // [key: <tipedata(string)>]: <tipedata_dari_value>
    }

    const dictionary: StringDictionary = {
        "name": "Dimas",
        "address": "Surabaya"
    }

    const names: StringArray = ["Dimas", "Ramadhan", "S"]

    // dapat juga object seperti array
    const names2: StringArray = {
        0: "Dimas",
        1: "Ramadhan",
        3: "S"
    }

    console.info(names[0], names2[0]);
    console.info(dictionary["name"], dictionary["address"]);
  })

// 3). EXTENDABLE
  it('should support Extends interface', function () {
      // semua yang dimiliki oleh interface "Employee" juga kebawa ke interface yg kita extend, "Manager"
    const employee: Employee = {
      id: 1,
      name: "Dimas",
      division: "IT"
    }

    const manager: Manager = {
      id: 1, // atribut wajib jika yg kita extend juga wajib
      name: "Ramadhan",
      division: "IT",
      numberOfEmployees: 10
    }

    console.info(employee, manager);
  })

// 4). FUNCTION/METHOD IN INTERFACE
  it('should support Method in interface', function () {
    // function(key: <tipedata>): <tipedata return>
    const person: Person = {
      name: "Dimas",
      sayHello: function (name: string): string {
        return `Howdy, ${name}! Mine is ${this.name}.`;
      }
    }
    console.info(person.sayHello("Kurniawan"));
  })

  // 4). INTERSECTION IN INTERFACE
  it('should support Intersection in interface', function () {
    // GABUNGAN DARI 2/lebih INTERFACE TANPA ANTRIBUT TAMBAHAN
    interface hasName {
      name: string;
    }
    interface hasID {
      id: number;
    }
    interface hasAddress {
      address?: string;
    }
    // penggabungan dari beberapa atribut
    type Final = hasID & hasName & hasAddress;

    const final: Final = {
      name: "Dimas",
      id: 12,
      address: "Surabaya"
    }
    console.info(final);
  })

  // 4). ASSERTION IN INTERFACE
  it('should support Assertions in interface', function () {
    // MENGONVERSI SESUATU DARI TIPE DATA "ANY"
    const person: any = {
      name: "Dimas",
      age: 20
    }

    // akan mengecek atribut "person" dengan "Person"
    const person2: Person = person as Person;
      // person2.age = 20 /* ERROR: Karena method sayHello tdk ada di 'Person' */
      // person2.sayHello("Budi") /* ERROR (di console): Karena method sayHello tdk ada di 'person' */

    console.info(person2);
  })

});
