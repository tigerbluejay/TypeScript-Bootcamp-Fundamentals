"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_method_decorator_1 = require("./02-method-decorator");
var _03_class_decorator_1 = require("./03-class-decorator");
var _04_property_decorator_1 = require("./04-property-decorator");
/* Decorators allow us to add existing functionality into a new class
without having to use inheritance. Which is great because typescript does not support mulitple inheritance.
With it we can weave different functionality from different services together in a class, method, or property. */
// @DatabaseService() // this is a decorator of the class - just an example, we don't implement it here
var DbService = /** @class */ (function () {
    function DbService() {
    }
    // perf decorator "wraps" around "log" decorator
    // Log is called first, then Perf
    DbService.prototype.saveData = function (data) {
        console.log("saving data in the database");
    };
    __decorate([
        (0, _02_method_decorator_1.Perf)() // this is a decorator of the method, it measures the elapsed time -when function was called, when it finished
        ,
        (0, _02_method_decorator_1.Log)(_02_method_decorator_1.LoggingLevel.DEBUG) // this is another decorator of the method
        // perf decorator "wraps" around "log" decorator
        // Log is called first, then Perf
    ], DbService.prototype, "saveData", null);
    DbService = __decorate([
        (0, _03_class_decorator_1.SealClass)() // this decorator would seal the class
    ], DbService);
    return DbService;
}());
var db = new DbService();
db.saveData({ hello: "World" }); // whenever we call saveData, the decoratorFactory will also be called (Log)
// how the console reads after executing the code
// Applying @Perf Decorator
// Applying @Log Decorator
// started at 1712763791118 (@Perf Decorator)
// >> log: saveData, [{"hello":"World"}] (@Log Decorator)
// saving data in the database (saveData Function)
// ended at 1712763791119 (@Log Decorator)
// this line tries to add a method to the sealed class above (sealed with the decorator)
// it will throw an error because the sealed decorator has been successfully applied to the class
// Object.defineProperty(DbService, "sayHello", { value: () => { console.log("Hello World");}});
/* Another example */
var Course = /** @class */ (function () {
    function Course(title) {
        this.title = title;
    }
    Course.prototype.print = function (message) {
        console.log("".concat(message, ", Course ").concat(this.title, ", id ").concat(this.id));
    };
    __decorate([
        (0, _04_property_decorator_1.DatabaseId)() // this decorator would automatically fill the id with a valid key
    ], Course.prototype, "id", void 0);
    return Course;
}());
// we print the uniquely generated DatabaseIds provided courtesy
// of the DatabaseId() decorator
var course1 = new Course("TypeScript Bootcamp");
console.log("Course 1 id: ", course1.id);
var course2 = new Course("Angular Core Deep Dive");
console.log("Course 2 id: ", course2.id);
// we print the full course object
console.log("Course 1", course1);
console.log("Course 2", course2);
