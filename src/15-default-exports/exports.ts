/* DEFAULT EXPORTS AND STAR(*) AS SYNTAX */

// STAR(*) AS SYNTAX
/* If you have a file like this one where there are many exports
you may import them by using a simplified syntax without having to ennumerate
all the exports (see the imports.ts file) */

// DEFAULT EXPORTS
/* If among the exports we have one that is more commonly used
we can mark it with the default keyword and use the simplified notation
shown in (imports.ts) file to reference it */

export const COURSE_TOTAL = 20;

export const TYPESCRIPT_COURSE = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonsCount: 10
}

export default function printCourse(course) {
    console.log(`The course title is ${course.title}`);
}