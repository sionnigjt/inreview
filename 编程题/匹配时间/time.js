function solve(str = '') {
    return /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(str)
}
console.log(solve("3:39"));