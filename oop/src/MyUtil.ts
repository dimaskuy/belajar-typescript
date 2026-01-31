export namespace MathUtil {
    // isi kode: variabel, class, function, dll
    export const PI: number = 22/7;

    export function factorial(n: number): number {
        if (n > 0 && n <= 1) {
            return 1;
        }
        return n * factorial(n-1)
    }

    export function sum(...nums: number[]): number {
        let total = 0;
        for (let num of nums) {
            total += num;
        }
        return total;
    }
}

export namespace StringUtil {
    // ...
}