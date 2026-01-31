describe('Error Handling', () => {
    // membuat custom error yg turunan dari built-in class "Error"
    class validateError extends Error {
        // "message" dari built-in class "Error" 
        constructor(message: string) {
            super(message)
        }
    }

    function doubleIt(value: number): number {
        if (value < 0) {
            // akan diteruskan ke custom error
            throw new validateError("Value cannot be less than 0.");
        }
        return value * 2;
    }

    it('should support try-catch and manual handling, just like JavaScript did', () => {
        try {
            console.info(doubleIt(11));
            const cobaError = doubleIt(-11);
            console.error(cobaError);
        } catch(e) {
            // jika error, maka tampilkan pesannya setelah di-throw kembali dari custom error (validateError)
            // memakai instanceof utk make sure hasil throw dari validateError
            if (e instanceof validateError) {
                console.error(e.message);
            }
        }
    })
})