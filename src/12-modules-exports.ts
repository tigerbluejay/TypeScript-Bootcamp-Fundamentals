/* MODULES EXPORTS AND IMPORTS*/

/* In TypeScript each file is a standalone module
This means that if we want to use a variable, constant, function or type
defined in a given page on another, we first need to export it from the given page
then import it into its destination page, like we've done on this file and on file
12-modules-imports.ts with the export and import keywords*/

// we can export a variable
export const PAGE_SIZE = 100;

const pageSize = PAGE_SIZE; // here we can use it without needing to import it
                            // because PAGE_SIZE is defined on the same page

// we can export an object
export const COURSE = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonCount: 10
};

// we can also export a type
export type Course = {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
};