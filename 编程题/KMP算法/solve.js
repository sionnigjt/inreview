//未完成
function kmpGetStrPartMatchValue(str) {
    let prefix = [];
    let suffix = [];
    let partMatch = [];
    for (let i = 0, j = str.length; i < j; i++) {
        let newStr = str.substring(0, i + 1);
        if (newStr.length == 1) {
            partMatch[i] = 0;
        } else {
            for (let k = 0; k < i; k++) {
                prefix[k] = newStr.slice(0, k + 1);
                suffix[k] = newStr.slice(-k - 1);
                if (prefix[k] == suffix[k]) {
                    partMatch[i] = prefix[k].length;
                }
            }
            if (!partMatch[i]) {
                partMatch[i] = 0;
            }
        }
    }
    return partMatch;
}
console.log(kmpGetStrPartMatchValue("abbcabb"));
