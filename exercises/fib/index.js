// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // if(n<2){
    //     return n;
    // }
    // return fib(n-2)+fib(n-1);

    const result = [0,1];
    for (let i = 0; i<=n; i++){
        result.push(result[result.length-2]+result[result.length-1]);
    }

    console.log(result);

    return result[n];


}

module.exports = fib;
