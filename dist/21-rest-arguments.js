/* REST ARGUMENTS */
/* Rest arguments are arguments defined with the spread operator
which allow us to pass an unlimited number of objects in its place */
;
var course1 = {
    title: "TypeScript Bootcamp",
    lessonsCount: 100
};
var course2 = {
    title: "TypeScript Bootcamp 2",
    lessonsCount: 200
};
// first argument is a string
// second argument an array of courses // we could pass a large number of objects as array items
// third argument is a rest argument // alternatively we could pass as many standalone objects as we want with the rest argument
function printCourses(message, courses) {
    var otherCourse = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherCourse[_i - 2] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course_1 = courses_1[_a];
        console.log(course_1.title); // access the titles of array objects course1 and course2
    }
    console.log(course1); // access rest argument #1 course 1
    console.log(course2); // access rest argument #2 course 2
}
printCourses("Welcome to Angular University", [course1, course2], course1, course2);
