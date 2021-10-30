function reserveWord(str = '') {
    return str.split(/\s+/).map(value => value.split('').reverse().join('')).join(' ')
}
console.log(reserveWord("hi  word"));