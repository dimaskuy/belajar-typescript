export interface Mahasiswa {
    id: number;
    name: string;
    address?: string;
    readonly nim: string;
    readonly nik?: string;
}
export interface Employee {
    id: number;
    name: string;
    division: string;
    address?: string;
}
export interface Manager extends Employee {
    numberOfEmployees: number;
}
export interface Person {
    name: string;
    sayHello(name: string): string;
}
//# sourceMappingURL=10-interface.d.ts.map