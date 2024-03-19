// Always prefer to define custom object types in your program over tuples
// Tuples can be useful to return unrelated values from a function
// initialize the tuple:
var courseRecord = ["TypeScript Bootcamp", "Learn the Fundamentals", 100];
// create a function and add the tuple as the return type
function createCourse(title, subtitle) {
    console.log("Creating course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, " "));
    // return the tuple
    return [title, subtitle, 100];
}
