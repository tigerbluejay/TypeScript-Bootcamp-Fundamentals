var courseName2 = "Typescript Bootcamp";
';
printCourseName2(courseName);
// printCourseName2(100);
function printCourseName2(name) {
    console.log("The course name is " + name.toUpperCase());
}
/* TYPESCRIPT TYPE SYSTEM */
/* We can specify that name is of type string in
a typescript file but not in javascript.
We do so writing "name: string"

This allows us to access all the methods available to
strings inside the function when we type name.

Additionally if we try to call printCourseName2 with an
int like 100 it will throw a compilation error.

This makes the language strongly typed and allows us
to catch at compile time some errors javascript
allow us to catch only at execution time */ 
