// TYPE ALIASES
// We can extract the types into a variable to be reused multiple times

type CourseStatus = "draft" | "published" | "unpublished" | "archived";

let courseStatus: CourseStatus = "draft";
let courseStatus2: CourseStatus = "published";

// We can also extract the types into a variable to be reused in multiple objects

type Course = {
    title: string,
    subtitle: string,
    lessonCount: number
};

let course: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learning the fundamentals",
    lessonCount: 10
}

let course2: Course = {
    title: "TypeScript Bootcamp 2",
    subtitle: "Learning the fundamentals 2",
    lessonCount: 20
}