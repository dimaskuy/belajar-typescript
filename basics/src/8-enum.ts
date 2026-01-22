export enum CustomerClass {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"

    // JIKA KIA MEMBUAT SEPERTI INI SAJA:
        // REGULAR,
        // GOLD,
        // PLATINUM
    // MAKA JS AKAN MENGONVERSI KE NUMBER SESUAI URUTAN DARI 0
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerClass
}