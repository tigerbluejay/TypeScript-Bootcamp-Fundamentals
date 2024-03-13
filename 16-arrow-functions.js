// in this example we simulate some javascript asynchronicity
function SaveCourse(course, callback) {
    var _this = this;
    this.course = course;
    // setTimeout is a predefined function which will call the callback after 1 second.
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = _this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "unknown course");
    }, 1000);
}
var cb = function (title) { return console.log("Save Successful.", title); };
// here we call the function
SaveCourse({ title: "TypeScript Bootcamp" }, cb);
// The syntax above is very similar to the syntax below
// only now we rely on the function keyword and we modify the syntax a little bit
function SaveCourse2(course, callback) {
    this.course = course;
    // setTimeout is a predefined function which will call the callback after 1 second.
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "unknown course");
    }, 1000);
}
SaveCourse2({ title: "TypeScript Bootcamp" }, function (title) {
    console.log("Save Successful.", title);
});
