/* Here we learn to create our first generic function */

interface Course2 { // we are calling it Course2 and not Course because of conflicts with the classes defined in readonly.ts
    title: string;
    subtitle: string;
    lessonCount: number;
}

interface Lesson {
    title: string;
    seqNo: number;
}

function freezeCourse2(course:Course2) : Readonly<Course2> { // the 2 comes from a conflict with another file in the same folder
    return Object.freeze(course);
}
function freezeLesson(lesson:Lesson) : Readonly<Lesson> {
    return Object.freeze(lesson);
}

const frozenCourse2 = freezeCourse2({
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonCount: 100
});

const frozenLesson = freezeLesson({
    title: "TypeScript Bootcamp",
    seqNo: 100
});

// we could simplify this by creating a generic function that accepts an object of type T

// we need to define it as a
// generic configuration parameter of the function (freeze<T>)
function freeze<T>(input: T): Readonly<T> {
    return Object.freeze(input);
}

const frozenCourse3 = freeze<Course2>({ // here we are calling the generic function "freeze<T>"
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Language, build practical projects",
    lessonCount: 100
})

// we can call it for lesson, and we could remove the configuration parameter in the call
const frozenLesson2 = freeze({ // here we are calling the generic function "freeze<T>"
    title: "TypeScript Bootcamp",
    seqNo: 100
})

// there's another way to write the call to the generic method, for example

const lesson: Lesson = {
    title: "Sample Title",
    seqNo: 100
}

const frozenLesson3 = freeze(lesson); // this is more readable


