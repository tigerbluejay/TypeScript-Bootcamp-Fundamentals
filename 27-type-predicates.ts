// a type predicate is an annotation we as in place of a function type
// when we are writing the function which enables the compiler to understand
// that we are type narrowing

interface Course { readonly title:string, subtitle:string, lessonsCount:number};

const course: unknown = { title: "Typescript Bootcamp", subtitle: "Learn the Fundamentals", lessonsCount: 10};

// now we do type narrowing
if (isCourse(course)) {
    let value:Course = course;
}

// with the help of the function implementing a type predicate
// here "value is Course" is the type predicate
function isCourse(value:unknown) : value is Course {
    const course = value as Course;
    return course?.title != null && course?.subtitle != null;
}
// if we were to substitute the type predicate for boolean
// then we wouldn't be able to do type narrowing in the eyes of the compiler.
