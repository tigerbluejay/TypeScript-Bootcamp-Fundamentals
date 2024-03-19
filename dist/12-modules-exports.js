"use strict";
/* MODULES EXPORTS AND IMPORTS*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.COURSE = exports.PAGE_SIZE = void 0;
/* In TypeScript each file is a standalone module
This means that if we want to use a variable, constant, function or type
defined in a given page on another, we first need to export it from the given page
then import it into its destination page, like we've done on this file and on file
12-modules-imports.ts with the export and import keywords*/
// we can export a variable
exports.PAGE_SIZE = 100;
var pageSize = exports.PAGE_SIZE; // here we can use it without needing to import it
// because PAGE_SIZE is defined on the same page
// we can export an object
exports.COURSE = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonCount: 10
};
