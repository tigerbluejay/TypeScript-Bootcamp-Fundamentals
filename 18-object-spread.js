/* THE OBJECT SPREAD OPERATOR (...) */
/* The object spread operator allows us to create shallow
copies of objects */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    stats: {
        lessonsCount: 10
    }
};
var newCourse = __assign({}, course); // creates a shallow copy
console.log(newCourse);
course.stats.lessonsCount = 100; // if we modify a nested property in a shallowed copied object
// the property will modify in the shallow copy as well.
console.log(newCourse);
// if you want to perform a deep copy (where the nested property in the deep copied object won't modify after changes)
// you will need to use a library
