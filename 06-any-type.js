/* THE ANY TYPE */
// Avoid the any type as much as possible.
// Sometimes the compiler assigns the any type
// when it can't determine the type
// But we should avoid it if possible
// with the any type the compiler won't complain
// you can assign number, string, object, null, undefined, array, anything
var lessonsCount = 10;
lessonsCount = "Typescript Boootcamp";
// we create an object
var user = {
    name: "Charlie",
    age: 40
};
var numbers = [10, 20, "Hello", true, null, undefined, user];
// DISADVANTAGES OF USING THE ANY TYPE:
// We can't benefit from the static ts type system
// We can't use refactoring or autocompletion because the compiler doesn't know the type
// We don't get useful compilation errors at development time
// We cannot prevent assignments of other things 
// Always use a specific type - do not use the any type, use it as a last resort
