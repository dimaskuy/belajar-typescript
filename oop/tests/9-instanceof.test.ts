describe('Instanceof', () => {
    class Student {}
    class Lecturer {}

    const dimas = new Student();
    const samid = new Lecturer();

    it('should have problem when using typeof', () => {
        // ketika ingin mengecek apakah termasuk dalam class tertentu, jika pakai typeof akan return object   
        console.info(typeof dimas);
        console.info(typeof samid);
    })
    it('should support instanceof', () => {
        // maka dapat menggunakan keyword instanceof:
        expect(dimas instanceof Student).toBe(true);
        expect(samid instanceof Lecturer).toBe(true);
        expect(samid instanceof Student).toBe(false);
        
    })
})