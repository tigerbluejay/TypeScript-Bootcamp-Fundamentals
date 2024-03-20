class Course7 {

    // The static keyword 2 most common use cases
    // A static property is shared across all instances of the class

    // case 1: as a private variable only mutable from within the class
    private static TOTAL_COURSES = 0;

    // case 2: as a readonly immutable constant
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    // mutable static variables are avoided altoghether,
    // they are either immutable (readonly) or private

    constructor(
        private _title:string, 
        private _subtitle = "", 
        private _creationDt = new Date(2000,0,1)){
    
        Course7.TOTAL_COURSES++; // case 1: as a private variable only mutable from within the class
        // we do not use "this" with static properties, we use the class name to access it
        // because it is not particular to any instance
    }

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

const course7a = new Course6(Course7.TYPESCRIPT_TITLE);
console.log(course6a.title);

// Course7.TYPESCRIPT_TITLE = ""; // we can't modify a constant
console.log(Course7.TYPESCRIPT_TITLE); // but we can print it outside the class

const course7b = new Course6("Angular Bootcamp");
console.log(course6b.title);
