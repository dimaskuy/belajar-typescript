describe('Getter & Setter', () => {
    class Category {
        _name?: string;

        // akan berjalan saat memanggil "name"
        get name() : string {
            if (this._name) {
                return this._name;
            } else {
                return "Name is still empty!";
            }
        }
        // akan berjalan saat mendefinisikan "name" (validasi)
        set name(value: string) {
            if (value !== "") {
                this._name = value; // jika bukan string kosong, maka return nama-nya
            }
            // selain itu, maka ignore-kan
        }
    }

    it('should support in class', () => {
        const category: Category = new Category();
        console.info(category); 

        category.name = "tech";
        console.info(category);

        category.name = "";
        console.info(category);
    })
})