interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

function createCourse(title:string, subtitle:string, lessonsCount:number) : Course {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);
    return { title, subtitle, lessonsCount };
}

const result = createCourse("TypeScript Bootcamp", "Learn the Fundamentals", 10);

// remember that it is important in functions for the parameters to specify their return types
// to specify the return type of the function we do : Course, where the return type is of type Course
// alternatively we could do:

function createCourse2(title:string, subtitle:string, lessonsCount:number) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);
    return { title, subtitle, lessonsCount } as Course;
}
const result2 = createCourse2("TypeScript Bootcamp", "Learn the Fundamentals", 10);

// using as course next to the return statement
// TypeScript will attempt to infer the return type if none is provided
// But if we return an object, it will only infer the object members' types, and not the object type
// if the object type is not specified.

/* FUNCTIONS AT RUNTIME */
// At runtime a function in javascript is of type "function" regardless of its return type
// Functions can be passed as parameters to other functions as arguments
// Functions can be assigned to constants also
// A Function is a value in the javascript runtime

// Function Notation
// function CreateCourse3(title:string, subtitle:string, lessonsCount:number): Course {//function body}
// function CreateCourse3(title:string, subtitle:string, lessonsCount:number): Course => {//function body}
// const CreateCourse3(title:string, subtitle:string, lessonsCount:number): Course {//function body}
// const CreateCourse3(title:string, subtitle:string, lessonsCount:number): Course => {//function body}

// this notation alternatives make it clear that a function is a value that can be passed around
// this is specially useful for building asynchronous programs using callbacks