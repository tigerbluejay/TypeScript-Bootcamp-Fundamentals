/* OBJECT DESTRUCTURING */
/* We can decompose an object into its components without having to do assignments one by one */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
};
function printCourse(course) {
    // we could do this
    // const title = course.title;
    // const subtitle = course.subtitle;
    // const lessonsCount = course.lessonsCount;
    // or we could use object destructuring notation
    // const {title, subtitle, lessonsCount} = course;
    // to print out
    // console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);
    // alternatively we could could group during an object destructring
    // the properties that have not yet been destructred in a single variable
    // like this
    var title = course.title, other = __rest(course, ["title"]);
    // to print out
    console.log("Title: ".concat(title, ", Subtitle: ").concat(other.subtitle, ", Lessons Count: ").concat(other.lessonsCount));
}
