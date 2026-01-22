describe("Optional Paramter | Null & Undefined", function () {
  it("should support null and undefined in typescript", function () {

    function sayHello(name?: string | null) {
        if (name) {
            console.info(`Hello ${name}!`)
        } else {
            console.info("Hello.")
        }
    }

    sayHello("Dimas")
    const name: string | undefined = undefined
    sayHello(name)
    // UNDEFINED seperti bypass tipe datanya, karena dia tidak ada isinya (ini seperti kita tidak menambahkan apa-apa pada optional param.)
    sayHello(null)
    // NULL merupakan tipe data, sehingga !== undefined

  });
});
