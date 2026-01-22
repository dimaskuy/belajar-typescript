// SITNAKS MIRIP DENGAN TYPE, INTERFACE DIGUNAKAN JIKA DATA YANG DISIMPAN ADALAH OBJECT/API
// TIDAK BISA PAKAI UNION (... | ...)

export interface Mahasiswa {
    id: number,
    name: string,
    address?: string    // optional
    readonly nim: string,
    readonly nik?: string
}

// EXTENDABLE INTERFACE
// ketika ada atribut yg sama dengan interface yg kita buat, maka kita dapat melengkapi-nya sehingga semua yang dimiliki oleh interface awal juga kebawa ke interface yg kita extend
export interface Employee {
    id: number;
    name: string;
    division: string;
    address?: string;
}

export interface Manager extends Employee {
    // tambahan atribut:
    numberOfEmployees: number;
}

export interface Person {
    name: string;
    sayHello(name: string): string;
}