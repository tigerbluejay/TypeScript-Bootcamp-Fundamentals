/* REST ARGUMENTS */
/* Rest arguments are arguments defined with the spread operator
which allow us to pass an unlimited number of objects in its place */

interface Course {
    title:string;
    lessonsCount:number;
};

const course1:Course = {
    title: "TypeScript Bootcamp",
    lessonsCount: 100
};

const course2:Course = {
    title: "TypeScript Bootcamp 2",
    lessonsCount: 200
};

// first argument is a string
// second argument an array of courses // we could pass a large number of objects as array items
// third argument is a rest argument // alternatively we could pass as many standalone objects as we want with the rest argument
function printCourses(message:string, courses: Course[], ...otherCourse:Course[]){

    console.log(message);

    for (let course of courses){
        console.log(course.title); // access the titles of array objects course1 and course2
    }

    console.log(course1) // access rest argument #1 course 1
    console.log(course2) // access rest argument #2 course 2
}

printCourses("Welcome to Angular University", [course1, course2], course1, course2);