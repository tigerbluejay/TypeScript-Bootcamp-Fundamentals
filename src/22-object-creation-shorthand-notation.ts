/* OBJECT CREATION SHORTHAND NOTATION */
/* When we assign to an object property a variable with the same name
we can obviate the assignment, the compiler will understand that we are
assigning the variable to it */

interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

const courseTitle = "TypeScript Bootcamp";
const courseSubtitle = "Learn the Fundamentals";
const lessonsCount = 100;

const course:Course = {
    title: courseTitle,
    subtitle: courseSubtitle,
    lessonsCount // this line would be equivalent to doing lessonsCount: lessonsCount
}
