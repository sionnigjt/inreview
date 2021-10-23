function* next_id() {
    let current_id = 1
    while (true) {
        yield current_id++
    }

}
let genreta = next_id();
console.log(genreta.next().value);
console.log(genreta.next().value);
// // 测试:
// var
//     x,
//     pass = true,
//     g = next_id();
// for (x = 1; x < 100; x++) {
//     if (g.next().value !== x) {
//         pass = false;
//         console.log('测试失败!');
//         break;
//     }
// }
// if (pass) {
//     console.log('测试通过!');
// }