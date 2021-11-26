const chunk = (arr = [], size) => Array.from({ length: Math.ceil(arr.length / size) },
    (valie, index) => arr.slice(index * size, index * size + size)
)
let arr = [1, 34, 23, 5, 23, 56, 43, 6, 37, 45678,]
console.log(chunk(arr, 3));

const chunkify = function* (itr, size) {
    let chunk = [];
    for (const v of itr) {
        chunk.push(v);
        if (chunk.length === size) {
            yield chunk;
            chunk = [];
        }
    }
    if (chunk.length) yield chunk;
};
const x = new Set([1, 2, 1, 3, 4, 1, 2, 5]);
console.log(...chunkify(x, 2));
