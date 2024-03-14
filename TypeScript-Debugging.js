/* TYPESCRIPT DEBUGGING IN THE BROWSER*/
// JAVASCRIPT DEBUGGING IN THE BROWSER
// step 1: first we add breakpoints with the debugger keyword
// for example
var courseName = "Typescript Bootcamp";
debugger; // here we add a breakpoint
if (courseName) {
    var subtitle = "Learn the fundamentals";
    printCourseName(courseName);
}
function printCourseName(name) {
    debugger; // we add another breakpoint here
    console.log("The course name is " + name.toUpperCase());
}
// step 2: then we compile our program, to produce the js file
// tsc TypeScript-Debugging.ts
// step 3: in the index.html make sure a script tag loads the js in the browser
// step 4: npm start
// step 5: refresh the browser and the debugger kicks in
// if it doesn't you might need to select the file under the Page menu, and the refresh the browser
// we can start debugging as we would under the Sources tab
// TYPESCRIPT DEBUGGING IN THE BROWSER
// Debug your typescript program using the typescript file (source)
// first compile with the sourceMap flag
// step 1: as before
// step 2: tsc --sourceMap TypeScript-Debugging.tsc
// step 3 and 4: as before
// step 5: as before
// but now the degugger shows us our ts file
//# sourceMappingURL=TypeScript-Debugging.js.map