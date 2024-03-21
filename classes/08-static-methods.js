var Course8 = /** @class */ (function () {
    function Course8(_title, _subtitle, _creationDt) {
        if (_subtitle === void 0) { _subtitle = ""; }
        if (_creationDt === void 0) { _creationDt = new Date(2000, 0, 1); }
        this._title = _title;
        this._subtitle = _subtitle;
        this._creationDt = _creationDt;
        Course8.TOTAL_COURSES++;
    }
    // static methods are accessible using the class name
    // this method does not have its own private this context (or properties)
    // only if we pass an instance as a parameter we can access the properties of the object
    Course8.printTitle = function (course) {
        console.log("The title of the course ".concat(course.title));
    };
    Object.defineProperty(Course8.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Course8.TOTAL_COURSES = 0;
    Course8.TYPESCRIPT_TITLE = "TypeScript Bootcamp";
    return Course8;
}());
var course8a = new Course8(Course8.TYPESCRIPT_TITLE);
console.log(course8a.title);
console.log(Course8.TYPESCRIPT_TITLE);
var course8b = new Course8("Angular Bootcamp");
console.log(course8b.title);
// static method call
Course8.printTitle(course8b);
