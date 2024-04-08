/* Generics allow us to write code that works for a variety of types
rather than a single custom type */

const numbers = new Array(); // here the array is of type any
// the methods defined in the Array API apply to strings, numbers and objects
numbers.push(10);
numbers.push("Hello");


// however we can define an array to be of a custom time
const numbers2 = new Array<number>(); // this is an array of type number
// it is type safe and can only work with numbers, so pushing a string into it
// would result in a compilation error.

// so Array is a generic class

/*********** PROMISES ***************/

// similarly promises, like arrays are generic
// remember to define the tsconfig.json file before using promises

const promise = new Promise((resolve, reject) => {
}); // this is a promise of unkown type

// we can define a promise to be of type string
const promise2 = new Promise<string>((resolve, reject) => {
    resolve("Hello");
});

promise.then(val => {

})