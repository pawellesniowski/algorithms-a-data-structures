// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arrOfWords = str.split(" ");
    let sentence = '';
    for (let word of arrOfWords) {
        const w = word.slice(0,1).toUpperCase();
        const rest = word.slice(1);
        sentence = sentence + " " + w+rest;
    }
    console.log("sentence:  ", sentence.slice(1));
    return sentence.slice(1);
}

module.exports = capitalize;
