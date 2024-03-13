/* THE OBJECT SPREAD OPERATOR (...) */
/* The object spread operator allows us to create shallow
copies of objects */

interface Course {
    title:string,
    subtitle:string,
    stats: {
        lessonsCount:number
    }
}

let course: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    stats: {
        lessonsCount: 10
    }
};

const newCourse = {...course}; // creates a shallow copy
console.log(newCourse);
course.stats.lessonsCount = 100; // if we modify a nested property in a shallowed copied object
// the property will modify in the shallow copy as well.
console.log(newCourse);

// if you want to perform a deep copy (where the nested property in the deep copied object won't modify after changes)
// you will need to use a library
