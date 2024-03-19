var courseName2 = "Typescript Bootcamp V3";
printCourseName2(courseName2);
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
/* RUNNING TYPESCRIPT */
/* Install typescript compiler in terminal:
npm install -g typescript
Move to the appropriate director and compile it:
tsc 01-why-typescript.ts
This generates file 01-why-typescript.js javascript file
This is the file that will run.
The compiler will always compile to javascript. */
/* The const was transformed to var, this is because
all browsers don't support const, so the compiler transforms
the ts into a valid version of javascript.
Also all type annotations are removed at runtime */
/* To run the program in the node runtime:
node 01-why-typescript.js
Javascript is the only language node understands for the moment */
/* DONT GENERATE A JS FILE COMPILING TS IF ERRORS EXIST */
/* To do so we must pass a flag to the compilation in the
terminal:
tsc --noEmitOnError 01-why-typescript.ts
Then no js file will be generated if there is a compilation
error on the ts file. */
/* HOW TO RUN TS PROGRAM IN A BROWSER */
/*
1. Compile: tsc 01-why-typescript.s
2. Set a simple HTTP Server:
npm init // inside the Fundamentals folder
// Give it a name, a version, and skip the other options
a package.json file is generated
3. Install a samll HTTP Server:
npm install lite-server
4. Modify the package.json file:
-remove the main property
-replace the test property for a start property
-set the start property to "lite-server"
5. Add an html page index.html
Paste boilerplate html code
with a script tag loading 01-why-typescript.js
6. Trigger the lite-server:
npm start
7. If we change tye 01-why-typescript.ts file
and we compile it into js we'll see the changes
reflected if we reload the browser.
8. Use the compiler on watch mode so that
whenever we change something in the file.
A new version gets inmediately reloaded and applied.
No need to compile each time.
tsc --watch --noEmitOnError 01-why-typescript.ts











*/
