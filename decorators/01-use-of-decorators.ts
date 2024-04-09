import {Log, LoggingLevel} from "./02-method-decorator";

/* Decorators allow us to add existing functionality into a new class
without having to use inheritance. Which is great because typescript does not support mulitple inheritance.
With it we can weave different functionality from different services together in a class, method, or property. */

// @SealClass() // this decorator would seal the class
// @DatabaseService() // this is a decorator of the class
class DbService {

    // @Perf() // this is a decorator of the method
    @Log(LoggingLevel.DEBUG) // this is another decorator of the method
    saveData(data: any) {
        console.log(`saving data in the database`);
    }
}

const db = new DbService();
db.saveData({hello: "World"}); // whenever we call saveData, the decoratorFactory will also be called (Log)

/* Another example */

class Course {

    // @DatabaseId() // this decorator would automatically fill the id with a valid key
    id:string;
    title:string;

    constructor(title:string) {
        this.title = title;
    }

    print(message:string) {
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }

}