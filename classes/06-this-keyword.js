var Course6 = /** @class */ (function () {
    function Course6(_title, _subtitle, _creationDt) {
        if (_subtitle === void 0) { _subtitle = ""; }
        if (_creationDt === void 0) { _creationDt = new Date(2000, 0, 1); }
        this._title = _title;
        this._subtitle = _subtitle;
        this._creationDt = _creationDt;
    }
    Object.defineProperty(Course6.prototype, "title", {
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
    return Course6;
}());
var course6a = new Course6("TypeScript Bootcamp");
console.log(course6a.title); // this calls the getter "title"
// which returns this.title, which is to say, the title
// of the current instance (course6a), which is "TypeScript Bootcamp"
var course6b = new Course6("Angular Bootcamp");
console.log(course6b.title); // this calls the getter "title"
// which returns this.title, which is to say, the title
// of the current instance (course6b), which is "Angular Bootcamp"
