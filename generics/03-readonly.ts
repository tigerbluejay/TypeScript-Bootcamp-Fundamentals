/* The Readonly interface allows us to work with an object whose properties are all readonly
It is commonly used in front end development when defining a return type after freezing an object 
(making all of its properties readonly) like below */

interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

const frozen = freezeCourse( {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonsCount: 100
})

// frozen.title = ""; // since the return type is Readonly this would throw a compilation error.