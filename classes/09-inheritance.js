var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course9 = /** @class */ (function () {
    function Course9(_title, _price, _subtitle, _creationDt) {
        if (_subtitle === void 0) { _subtitle = ""; }
        if (_creationDt === void 0) { _creationDt = new Date(2000, 0, 1); }
        this._title = _title;
        this._price = _price;
        this._subtitle = _subtitle;
        this._creationDt = _creationDt;
        Course9.TOTAL_COURSES++;
        this.validatePrice();
    }
    Course9.prototype.validatePrice = function () {
        if (this._price <= 0) {
            throw "Price must be larger than zero";
        }
    };
    Object.defineProperty(Course9.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Course9.TOTAL_COURSES = 0;
    Course9.TYPESCRIPT_TITLE = "TypeScript Bootcamp";
    return Course9;
}());
// FreeCourse9 is the child class and Course9 the parent class
// FreeCourse9 inherits methods and behaviors from the parent class
var FreeCourse9 = /** @class */ (function (_super) {
    __extends(FreeCourse9, _super);
    // here it defines its own constructor
    function FreeCourse9(
    // here it defines its own properties
    _title, _subtitle, _creationDt) {
        if (_subtitle === void 0) { _subtitle = ""; }
        if (_creationDt === void 0) { _creationDt = new Date(2000, 0, 1); }
        // the child class constructor must call the parent class constructor
        // however when the parent class constructor calls the validatePrice()
        // it will call the child class implementation
        return _super.call(this, _title, 0, _subtitle, _creationDt) || this;
    }
    FreeCourse9.prototype.validatePrice = function () {
        console.log("Called Free Course validate()");
    };
    return FreeCourse9;
}(Course9));
var course9 = new Course9(Course9.TYPESCRIPT_TITLE, 100);
console.log(course9.title);
console.log(Course9.TYPESCRIPT_TITLE);
var freeCourse9 = new FreeCourse9("Angular Bootcamp");
console.log(freeCourse9.title);
