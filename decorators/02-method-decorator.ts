export enum LoggingLevel {
    ERROR = "ERROR",
    INFO = "INFO",
    WARN = "WARN",
    DEBUG = "DEBUG",
    TRACE = "TRACE"
} // these are listed in order

const appMaxLoggingLevel = LoggingLevel.DEBUG; // this is the logging level set in our application
// it means debug will print out error, info, warn and debug,

export function Log(level: LoggingLevel): MethodDecorator {

    console.log(`Applying @Log Decorator`);

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

                console.log(`target:`, target);
                console.log(`propertyKey`, propertyKey);
                console.log(`descriptor`, descriptor);

    }
}

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
