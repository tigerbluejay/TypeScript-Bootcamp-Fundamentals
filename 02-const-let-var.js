var courseName = "TypeScript Bootcamp";
if (courseName) {
    // const subtitle = "Learn the langauage fundamentals CONST";
    // let subtitle = "Learn the langauage fundamentals LET";
    var subtitle = "Learn the langauage fundamentals VAR";
    printCourseName(courseName);
}
// this line won't work with subtitle
// defined as const or let, but it will
// work if defined as var
console.log(subtitle);
function printCourseName(name) {
    console.log("The course name is " + name.toUpperCase());
}
/* DIFFERENCE BETWEEN CONST, LET, AND VAR */
/*

CONST   Can't modify    Scoped
LET     Can modify      Scoped
VAR     Can modify      Not Scoped

Can't modify means that you can't modify it once
you've declared it and assigned an original value to it.
Scoped means that Const and Let are only available
within the code block (inside if statement for example)
and are not available outside it.

Recommendation is to never use var.
*/ 
