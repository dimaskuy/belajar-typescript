describe("Type Object", function () {
    it("should support in typescript", function () {

        const person: { id: string, name: string, hobbies?: string[] } = {
            id: "1",
            name: "Dimas",
            // hobbies: ["Just", "Optional", "Parameter"]
        }

        person.id = "2";
        person.name = "PZN";
        // person.desc = "ERROR!"

        console.info(person);

    });
})
