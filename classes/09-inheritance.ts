class Course9 {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    constructor(
        private _title:string, 
        private _price: number,
        private _subtitle = "",
        private _creationDt = new Date(2000,0,1)){
    
        Course9.TOTAL_COURSES++;

        this.validatePrice();
    }

    validatePrice() {
        if (this._price <= 0) {
            throw "Price must be larger than zero";
        }
    }

    get title(){
        return this._title;
    }


}

// FreeCourse9 is the child class and Course9 the parent class
// FreeCourse9 inherits methods and behaviors from the parent class
class FreeCourse9 extends Course9 {

    // here it defines its own constructor
    constructor(
        // here it defines its own properties
        _title:string, 
        _subtitle = "",
        _creationDt = new Date(2000,0,1)){
    
        // the child class constructor must call the parent class constructor
        // however when the parent class constructor calls the validatePrice()
        // it will call the child class implementation
        super(_title, 0, _subtitle, _creationDt);
    }

    validatePrice() {
        console.log(`Called Free Course validate()`);
    }


}


const course9 = new Course9(Course9.TYPESCRIPT_TITLE, 100);
console.log(course9.title);

console.log(Course9.TYPESCRIPT_TITLE);

const freeCourse9 = new FreeCourse9("Angular Bootcamp");
console.log(freeCourse9.title); // this uses the parent getter with the child property value