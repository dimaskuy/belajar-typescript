// MEMBUAT SUATU KEY YANG BERISI VALUE SUATU TIPE DATA DALAM SEBUAH OBJECT
// DAPAT MELAKUKAN UNION TYPE (dlm hal ini string | number pada id)

export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
    desc?: string; // OPTIONAL PERAMETER (JIKA TIDAK ADA MAKA UNDEFINED)
}

export type Product = {
    id: ID;
    name: string;
    price: string;
    category: Category;
}
