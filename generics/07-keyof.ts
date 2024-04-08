const course: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonsCount: 10
}

type CourseKeys = keyof Course;

export function extractProperty<T, K extends keyof T>(data: T, property: K) {
    return data[property];
}

const val = extractProperty(course, "lessonsCount");
// val is type safe and inferred to be of type number
// why?
// because the property parameter is defined as being of type K
// and in the generic configuration parameter of the function we say that
// K extends keyof T, in other words that K is of type keyof T
// and keyof T means in this example keyof Course
// which is a type that is defined to be of the same type as the union of the properties in Course

// this call could have also been written more explicitly like this:
const val2 = extractProperty<Course, CourseKeys>(course, "lessonsCount");
