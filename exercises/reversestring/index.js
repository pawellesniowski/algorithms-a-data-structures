// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reduce((acc, b) => {
    //     return b + acc;
    // }, '');
    let reversed = '';
    for( let i of str) {
        reversed = i+reversed;
    }
    return reversed;

}

module.exports = reverse;
