/* THE ANY TYPE */
// Avoid the any type as much as possible.
// Sometimes the compiler assigns the any type
// when it can't determine the type
// But we should avoid it if possible

// with the any type the compiler won't complain
// you can assign number, string, object, null, undefined, array, anything
let lessonsCount:any = 10;
lessonsCount = "Typescript Boootcamp";

// we create an object
const user = {
    name: "Charlie",
    age: 40
};

let numbers: any[] = [10, 20, "Hello", true, null, undefined, user];


// DISADVANTAGES OF USING THE ANY TYPE:
// We can't benefit from the static ts type system
    // We can't use refactoring or autocompletion because the compiler doesn't know the type
    // We don't get useful compilation errors at development time
    // We cannot prevent assignments of other things 
 // Always use a specific type - do not use the any type, use it as a last resort


 // NO IMPLICIT ANY FLAG
 // When you define a function and don't specify the types of the parameters
 // The compiler will automatically infer for these parameters the any type.

 // It is not recommended that you compile programs with implicit any assignments
 // To avoid the assignment of implicit any you can pass the no implicit any flag when compiling
 
 // So for example if you have this function
 function printCourse(parameterA, parameterB) {
    console.log(`Parameter A Contents: ${parameterA}, Parameter B Contents: ${parameterB}`);
 }
 // the compiler will assign any to both parameters because it cannot infer their type
 // To avoid this, when compiling the program, do:
 // tsc --noImplicitAny 06-any-type.ts
 // this will throw a compilation error and give you a chance to fix the function adding
 // to the parameters their type

 // Using this flag guarantees you'll access type safety benefits such as
 // refactoring, autocompletion and useful error messages


