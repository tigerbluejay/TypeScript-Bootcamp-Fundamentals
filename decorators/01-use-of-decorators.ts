import {Log, LoggingLevel, Perf} from "./02-method-decorator";
import {SealClass} from "./03-class-decorator";
import {DatabaseId} from "./04-property-decorator";
/* Decorators allow us to add existing functionality into a new class
without having to use inheritance. Which is great because typescript does not support mulitple inheritance.
With it we can weave different functionality from different services together in a class, method, or property. */

// @DatabaseService() // this is a decorator of the class - just an example, we don't implement it here
@SealClass() // this decorator would seal the class
class DbService {

    @Perf() // this is a decorator of the method, it measures the elapsed time -when function was called, when it finished
    @Log(LoggingLevel.DEBUG) // this is another decorator of the method
    // perf decorator "wraps" around "log" decorator
    // Log is called first, then Perf
    saveData(data: any) {
        console.log(`saving data in the database`);
    }
}

const db = new DbService();
db.saveData({hello: "World"}); // whenever we call saveData, the decoratorFactory will also be called (Log)

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

class Course {

    @DatabaseId() // this decorator would automatically fill the id with a valid key
    id:string;
    title:string;

    constructor(title:string) {
        this.title = title;
    }

    print(message:string) {
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }

}

// we print the uniquely generated DatabaseIds provided courtesy
// of the DatabaseId() decorator
const course1 = new Course("TypeScript Bootcamp");
console.log(`Course 1 id: `, course1.id);

const course2 = new Course("Angular Core Deep Dive");
console.log(`Course 2 id: `, course2.id);

// we print the full course object
console.log("Course 1", course1);
console.log("Course 2", course2);
