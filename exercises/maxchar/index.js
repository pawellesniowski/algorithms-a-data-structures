// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arrFromStr = str.split('');
    let maxKey = null;
    let maxCounterValue = 0;

    const myMap = arrFromStr.reduce((acc, b) => {
        acc[b]? acc[b]++ : acc[b]=1;
        return acc;
    }, new Map());

    const myMapEntries = Object.entries(myMap);

    myMapEntries.forEach((miniArr) => {
        let [key, counter] = miniArr;
        if(counter>maxCounterValue){
            maxCounterValue = counter;
            maxKey = key;
        }

    });

    return maxKey;
}

module.exports = maxChar;




// assign string to an object, every time when we need to count letters in words:
// console.log('given string: ', str);
// let maxCount = 0;
// let maxChar = null;
// const myObj = str.split('').reduce((acc, b) => {
//     acc[b]? acc[b]++ : acc[b] = 1;
//     return acc;
// }, new Map());
//
//
// Object.entries(myObj).forEach((entry) => {
//     const [char, count] = entry;
//     if (count > maxCount) {
//         maxCount = count;
//         maxChar = char;
//     }
// });
//
// console.log(maxChar);
// return maxChar;