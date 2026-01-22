describe("Array", function () {
    it("should be same with javascript", function () {
      const names: string[] = ["dimas", "budi", "doom"];
      const value: number[] = [1, 10, 100]

      console.info(names)
      console.info(value)
    });

    it("should be same with javascript", function () {
      // tidak bisa diubah, hanya dapat dilihat
      const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]
      // hobbies[0] = "Coding"
      console.info(hobbies)
    });

    it("should support tupple", function () {
      // sejumlah array yang sudah ditentukan nilai & tipe datanya (support readonly)
      const blob: readonly[string, string, number, boolean] = ["Dimas", "RS", 20, true];
      // blob[0] = "Dim"
      console.info(blob)
    });

});
