describe('Data Type <Primitive>', function() {
    it('should must declare', function() {
        let name: string = "Dimas RS";  // jangan "String" (dgn kapital), akan salah sangka dgn referensi object
        let balance: number = 100000;
        let isVip: boolean = true
        // let idk: any = true

        console.info(name);
        console.info(balance);
        console.info(isVip);
    })
})

// don't forget to: "npx tsc" first
// "npx tsc --watch" utk cek terus-menerus