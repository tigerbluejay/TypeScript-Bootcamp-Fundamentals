// UNION TYPES
// You can declare a variable to be of one type or another with the pipe

// uniqueIdentifier can be a number or a string
let uniqueIdentifier: number | string = 1000;
// so when we assign a string to it later in the program
// there is no compilation error
uniqueIdentifier = "201e-49e3-40ef-b7f3e7d947f8";

// array keys can be an array of numbers or strings
const keys: (number | string) [] = [1000, "Hello", 3, "World"];

// a more common use of UNION TYPES is when we declare
// a variable to be of a type or null
// for example here courseId can be a number or null
// this is useful when dealing with foreign keys in databases
// which can be a number or null at times
let courseId: number | null = 1000;
courseId = null;

//!!! IMPORTANT NOTE
// Note that in some older versions of typescript the following example
// would not throw a compilation error
// let productId: number = 1000;
// productId = null;

// if there is no compilation error, you can opt to compile
// with the strict nulls check flag, to disallow this behavior
// tsc --strictNullChecks 07-union-types.ts
// and force you to specify that productId should be a number or null
// like this:
// let productId: number | null = 1000;


