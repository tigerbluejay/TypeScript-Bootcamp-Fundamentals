"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perf = exports.Log = exports.LoggingLevel = void 0;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["ERROR"] = 0] = "ERROR";
    LoggingLevel[LoggingLevel["INFO"] = 1] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 2] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 3] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 4] = "TRACE";
})(LoggingLevel || (exports.LoggingLevel = LoggingLevel = {})); // these are listed in order
var appMaxLoggingLevel = LoggingLevel.DEBUG; // this is the logging level set in our application
// it means debug will print out error, info, warn and debug,
function Log(level) {
    console.log("Applying @Log Decorator");
    // this is the decorator factory, it enhances or replaces the function being decorated
    return function (target, propertyKey, descriptor) {
        var originalFunction = descriptor.value; // reference to function "saveData" that we are trying to enhance
        descriptor.value = function () {
            // it receives similar parameters to the original function "saveData"
            // we need to use the function keyword
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= appMaxLoggingLevel) { // decides when to log
                console.log(">> log: ".concat(propertyKey, ", ").concat(JSON.stringify(args))); //logging 
            }
            originalFunction.apply(this, args); // apply calls the original function
            // this context refers to the current instance of the function saveData
            // this so because we are using the function keyword and not anonymous method syntax
        };
        // console.log(`target:`, target);
        // console.log(`propertyKey`, propertyKey);
        // console.log(`descriptor`, descriptor);
    };
}
exports.Log = Log;
/* The function that is returned is the decorator factory. It will tell the compiler what to do
when it finds a Log decorator applied to a class, method or property.

The function Log will be able to add functionality before the call to saveData
(the method to which the decorator is applied), after saveData, and its also going to be
able to replace the method completely, enhancing it with new features, in this case, logging.
This enhancement is known as meta programming.

The target, propertyKey and descriptor parameters are going to be useful in meta programming
for this function. These are necessary to enhane the method/property being decorated.
    The compiler calls first the decorator factory.
    The target is the prototype of the class that contains the decorated method. We can manipulate it,
    add remove features, and modify the existing behavior of this class. In this case, class "DbService"
    The propertyKey is the name of the method/property to which the decorator is applied.
    The descriptor contains the value of the method/property of the propertyKey and a number of flags
    that we can apply to the property.
*/
function Perf() {
    console.log("Applying @Perf Decorator");
    return function (target, propertyKey, descriptor) {
        var originalFunction = descriptor.value; // we grab the original function
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("started at ".concat(new Date().getTime()));
            originalFunction.apply(this, args);
            console.log("ended at ".concat(new Date().getTime()));
        };
    };
}
exports.Perf = Perf;
module.exports = {
    Log: Log,
    LoggingLevel: LoggingLevel, // Assuming LoggingLevel is defined elsewhere
    Perf: Perf
};
