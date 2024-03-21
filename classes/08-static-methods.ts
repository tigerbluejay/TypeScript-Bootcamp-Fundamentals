class Course8 {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    constructor(
        private _title:string, 
        private _subtitle = "", 
        private _creationDt = new Date(2000,0,1)){
    
        Course8.TOTAL_COURSES++;
    }

    // static methods are accessible using the class name
    // this method does not have its own private this context (or properties)
    // only if we pass an instance as a parameter we can access the properties of the object
    static printTitle(course: Course8) {
        console.log(`The title of the course ${course.title}`);
    }
    // if we define the static method as private, it can only be called from within the class

    get title(){
        return this._title;
    }

    set title(newTitle:string){
        if (!newTitle) {
            throw "Title cannot be empty";
        }
        this._title = newTitle;
    }

}

const course8a = new Course8(Course8.TYPESCRIPT_TITLE);
console.log(course8a.title);

console.log(Course8.TYPESCRIPT_TITLE);

const course8b = new Course8("Angular Bootcamp");
console.log(course8b.title);

// static method call
Course8.printTitle(course8b);