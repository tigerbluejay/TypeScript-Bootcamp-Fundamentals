interface Course { title:string; subtitle:string; lessonsCount:number;}

// functions have a type "Function" associated to them
// we can define a type for a function using the type keyword
// defining function types is typically used when using callback functions
// let's see an example

// here we define a type for the createCourse function
// we are missing parameter "callback" but that won't throw a compilation error
    // missing a parameter is acceptable in javascript, so for backwards compatibility
    // typescript maintains this convention
// function should return an object of type Course
type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;

// here we define a type for the callback function, it should have at least 1 parameter of type Course
// and a return type of void.
type OnCourseCreated = (course: Course) => void;

const createCourse = (title:string, subtitle:string, lessonsCount:number, callback:OnCourseCreated) => {

    console.log(`Creating course with Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);

    const course = {title, subtitle, lessonsCount};

    callback(course); // the callback which is of type OnCourseCreated, should accept at a minimum 1 argument of
                      // type course and return void.

    return course;
}