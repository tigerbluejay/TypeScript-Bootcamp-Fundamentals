// NUMBER
const lessonCount = 10;
// also valid
// const lessonCount = 10.12;
// const lessonCount:number = 10;
// const lessonCount:number = 10.12;

const total = lessonCount + 10;
console.log("total = ", total);

// STRING
let title = "TypeScript Bootcamp";
let subtitle2 = "Learn the language fundamentals";

// the typeof keyword gives us the type of the variable
console.log("type of the variable = " + typeof subtitle2); 

const fullTitle = title + ": " + subtitle2;

console.log("Full title: " + fullTitle);

// Property of String in Ts and Js:
// Strings are immutable, even if we use let to define it
// the string cannot be mutated. It can be replaced by a new
// string, but it can't be modified in memory.


// BOOLEAN
const published = true;
if (published) {
    console.log("The course is published");
}

// For all types, we cannot change the type
// once it has been declared and assigned.


/* TEMPLATE STRINGS */
// Or backticks
// Implemented to improve readablity

// If strings are constants you can use " " and ' '
// they are indistinct.

// But if you are doing string concatenation
// it is more readable if you use template strings
// Example:
// let title = 'TypeScript Bootcamp';
// let subtitle2 = "Learn the language fundamentals";
// const fullTitle = `${title}: ${subtitle2}`;
// console.log(`Full title: ${fulltitle});

/* TYPE INFERENCE */
/* If we inspect the variables hovering over them
we can see that the ts compiler infered the type, if we assigned
a string to it, it infers it is a string, if we 
assigned a decimal, it infers it is a number */

/* We don't need to write the type annotations 
like:
published:boolean = true;
*/

/* TYPE ANNOTATIONS */
/* The TS compiler can infer a type almost anywhere
in the program.
We should annotate the input arguments of functions
with their type so as to avoid
1. mistaking the order of the arguments when we call
the function, or passing the wrong type to a function
2. to enable the ts compiler to infer the type inside
the function.
*/

printCourse(title, subtitle2, lessonCount);

function printCourse(title:string, subtitle:string, lessonCount:number) {
    let fullTitle = title + subtitle;
}
// now with the input arguments annotated with their type
// the ts compiler can infer the types and infer that
// fullTitle is of type string.


/* TS STATIC TYPE SYSTEM */
// Once a variable gets assigned a type by the 
// compiler, it cannot be changed

// In javascript this is not so, it is a dynamic
// type system, it can changed with the execution
// of the program.

// In TS for example, this is not allowed:
// let fullTitle = "This is a title"
// fullTitle = 10;

// In JS it is:
// var fullTitle = "This is a title"
// fullTitle = 10;


/* PRIMITIVE TYPE: OBJECT */
// In ts we could write
let course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonCount: 10
}

console.log("type of course is " + typeof course );
// typeof types the js runtime type.
// in this case, course if of type object

// We could define inline the types of objects
// if we want - but its not necessary.
// let course:object {
//     title:string,
//     subtitle:string,
//     lessonCount:number
// } = {
//     title: "Typescript Bootcamp",
//     subtitle: "Learn the language fundamentals",
//     lessonCount: 10
// }