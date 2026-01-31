import { MathUtil } from "../src/MyUtil";
describe('Namespace', () => {
    // NAMESPACE: cara utk mengorganisir/mengelola kode (variable, class, function, dll) dalam satu module ketika terdapat banyak kode agar tdk ada konflik nama dalam project
    // Namespace didefinisikan dengan keyword "namespace", semua member di dalam namespace yang ingin diakses dari luar harus diberi keyword "export"
    // Namespace biasanya ditulis dalam satu file atau module, lalu digunakan dengan cara di-import ke file lain (cek: src/MyUtil.ts)
    // Namespace sendiri mulai tergantikan dgn ES Module (import/export langsung) di project modern
    it('should support Namespace module', () => {
        console.info(MathUtil.PI);
        console.info(MathUtil.factorial(5));
        console.info(MathUtil.sum(10, 20, 30, 40, 50));
    });
});
//# sourceMappingURL=16-namespace.test.js.map