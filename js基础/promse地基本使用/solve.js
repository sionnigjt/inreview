// function wait() {
//     return new Promise(resolve => {
//         setTimeout(()=>resolve, 10*1000);
//     })
// }
// async function main() {
//     console.time()
//     await wait()
//     await wait()
//     await wait()
//     console.timeEnd()
// }
// main()

const sleep=(time) => {
    return new Promise(resolve => {
        return setTimeout(resolve,time)
    })

}
console.time()
sleep(10000).then(() => {

    console.log("等待10s");
    console.timeEnd();
})

