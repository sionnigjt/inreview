{
    console.log([] + []);
    console.log({} + []);
    console.log([] + {});
    console.log(Number([]), Number({}), Number(true));
    console.log({}.toString(), [].toString(), true.toString());
    console.log(Boolean([]), Boolean([].toString()), Boolean(Object), Boolean({}), Boolean(0));
}
let a = new Object();
console.log(a.toString());
console.log(typeof ['12', 1], ~0, !![]);
function foo() {
    try {
        return 42;
    }
    finally {
        console.log("Hello");
    }
    console.log("never runs");
}
console.log(foo());
{
    let a = {
        name: 'hi',
        toString() {
            return '12'
        }
    }
    console.log('12 '== a);
}