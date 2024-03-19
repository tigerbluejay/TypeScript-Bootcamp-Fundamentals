/* DEFAULT FUNCTION ARGUMENTS */

// We can define default function arguments on each parameter
// If we do not pass a value for that parameter during a function call
// but a default function argument is defined for that parameter
// it will be used and there will be no compilation errors

function printCourse(title:string = "TITLE", subtitle:string = "SUBTITLE", lessonsCount:number = 20) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessons count: ${lessonsCount}`);
}

printCourse("TypeScript Bootcamp", "Learn the Fundamentals", 10);
printCourse("TypeScript Bootcamp", "Learn the Fundamentals");
printCourse();