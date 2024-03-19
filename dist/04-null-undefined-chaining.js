/* NULL VS UNDEFINED */
// const title:string; // this is not allowed, const should always be initalized
var title2; // this will be initialized as undefined
var title3 = undefined; // this will be initialized as undefined
console.log("title = " + title2 + " and " + title3); // both will evaluate to undefined
// undefined means that the variable has not yet been initialized
if (!title2) {
    console.log("Undefined evaluates to false");
}
// null means that the variable has no value assigned
// when the value of a variable is absent, we assign to it null
var title4 = null;
console.log("title = " + title4); // will evaluate to null
if (!title4) {
    console.log("Null evaluates to false");
}
// try to use null over undefined
// there are no practical uses for the distinction between undefined and null
// most languages don't have undefined - so always use null
// It would also be interesting to include console.log("type of title is " + typeof title); 
// in your example. When using undefined type is undefined and value is undefined, 
// but when let title = null; is in effect it outputs type is object and value is null.
console.log("Type of Undefined: " + typeof title2 + " Type of null: " + typeof null);
/* OPTIONAL CHAINING */
// Useful for avoiding type errors
var course = {
    title: "Typescript Bootcamp"
};
if (course.title) {
    console.log("The title is ".concat(course.title));
}
var course2 = null;
// if (course2.title) { console.log(`The title is ${course2.title}`);} // will result in an error
// Shortcut opeartor
// if (course2 && course2.title) {console.log(`The title is ${course2.title}`); }
// This supposedly won't throw a compilation error and won't print anything
// Optional Chaining (alternative - simpler expression)
// if (course2?.title) {console.log(`The title is ${course2.title}`); }
// This supposedly won't trow a compilation erro and won't print anything
// console.log(course2?.title);
// This supposedly evaluates to undefined
/* NULL COALESCING OPERATOR */
var course3 = null;
// if course3 is null, "No title found" will be printed
var title = course3 !== null && course3 !== void 0 ? course3 : "No title found";
console.log(title);
/* WHEN TO USE OPTIONAL CHAINING */
// We should always handle errors and print appropriate error messages
// Do not use optional chaining everywhere. If you do, it might be a sign
// that you are not using error handling logic sufficiently.
