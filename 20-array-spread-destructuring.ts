
// Array spread operator

const numbers = [1, 2, 3];

const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers); // will print 1, 2, 3, 4, 5, 6


// Array destructuring

const [first, second, third] = moreNumbers;

console.log(first, second, third); // will print 1, 2, 3