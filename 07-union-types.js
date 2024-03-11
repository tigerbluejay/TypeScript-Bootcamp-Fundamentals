// UNION TYPES
// You can declare a variable to be of one type or another with the pipe
// uniqueIdentifier can be a number or a string
var uniqueIdentifier = 1000;
// so when we assign a string to it later in the program
// there is no compilation error
uniqueIdentifier = "201e-49e3-40ef-b7f3e7d947f8";
// array keys can be an array of numbers or strings
var keys = [1000, "Hello", 3, "World"];
// a more common use of UNION TYPES is when we declare
// a variable to be of a type or null
// for example here courseId can be a number or null
// this is useful when dealing with foreign keys in databases
// which can be a number or null at times
var courseId = 1000;
courseId = null;
