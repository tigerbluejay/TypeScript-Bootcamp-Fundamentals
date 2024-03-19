/* OBJECT CREATION SHORTHAND NOTATION */
/* When we assign to an object property a variable with the same name
we can obviate the assignment, the compiler will understand that we are
assigning the variable to it */
var courseTitle = "TypeScript Bootcamp";
var courseSubtitle = "Learn the Fundamentals";
var lessonsCount = 100;
var course = {
    title: courseTitle,
    subtitle: courseSubtitle,
    lessonsCount: lessonsCount // this line would be equivalent to doing lessonsCount: lessonsCount
};
