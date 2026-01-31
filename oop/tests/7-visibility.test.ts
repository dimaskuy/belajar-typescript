describe('Visibility', () => {
    // pada child class dari parent, secara default properti & method dari parent dapat dipakai
    
    // public: dapat diakses dimanapun (default, tanpa menyebutkan visibility)
    // private: hanya dapat diakses oleh class-nya
    // protected: sama seperti private, tetapi dapat diakses oleh class turunannya

    class Counter {
        protected counter: number = 0;
        private indexCount: number = 0;

        public increment(): void {
            this.counter++;
            this.indexCount++;
            console.info("you have counted: ", this.indexCount);
        }   // sama saja tanpa menuliskan 'public'

        public showCount(): number {
            return this.counter;
        }
    }

    class CustomCounter extends Counter {
        private indexCustomCount = 0;

        public increment(): void;   // sesuai kontrak parent
        public increment(n: number): void;  // definisi kontrak child baru
        public increment(n: number = 1): void {
            this.counter += n;
            this.indexCustomCount++;
            console.info("you have counted: ", this.indexCustomCount);
        }
    }


    it('should support public, private, and protected in class properties/method', () => {
        const count = new Counter();
        // count.counter = 1; // error: 'counter' hanya dapat diakses ke class-nya langsung
        
        count.increment();
        console.info(count.showCount());

        const countCustom = new CustomCounter();
        countCustom.increment(10);
        console.info(countCustom.showCount());
    })
})