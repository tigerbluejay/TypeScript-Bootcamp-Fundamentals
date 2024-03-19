/* DEFAULT FUNCTION ARGUMENTS */
// We can define default function arguments on each parameter
// If we do not pass a value for that parameter during a function call
// but a default function argument is defined for that parameter
// it will be used and there will be no compilation errors
function printCourse(title, subtitle, lessonsCount) {
    if (title === void 0) { title = "TITLE"; }
    if (subtitle === void 0) { subtitle = "SUBTITLE"; }
    if (lessonsCount === void 0) { lessonsCount = 20; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessons count: ").concat(lessonsCount));
}
printCourse("TypeScript Bootcamp", "Learn the Fundamentals", 10);
printCourse("TypeScript Bootcamp", "Learn the Fundamentals");
printCourse();
