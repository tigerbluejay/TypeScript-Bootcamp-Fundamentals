import {HasId, HasTitle} from "./12-interfaces-samples";
// an interface is a way to define a contract that a class HAS to follow in its ENTIRETY

// one class can implement one or more interfaces
// in this case we are implementing a parent interface (and its children implicitly)
abstract class Course12 implements HasTitle {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    protected constructor(
        public id:number, // we MUST implement the interface property which MUST be public
        protected _title:string, 
        protected _price: number,
        protected _subtitle = "",
        protected _creationDt = new Date(2000,0,1)){
    
        Course12.TOTAL_COURSES++;

        this.validatePrice();
    }

    protected abstract validatePrice();

    get title(){
        return this._title;
    }

    printId() { // we MUST implement the interface method
        console.log(`The course id is ${this.id}`);
    }


}

class FreeCourse12 extends Course12 {

    constructor(
        id:number, // we MUST implement interface properties in child classes
        _title:string, 
        _subtitle = "",
        _creationDt = new Date(2000,0,1)){
    
        super(id, _title, 0, _subtitle, _creationDt); // and we must pass it to the parent constructor
    }

    validatePrice() {
        console.log(`Called Free Course validate()`);
    }


}

console.log(Course12.TYPESCRIPT_TITLE);

const freeCourse12 = new FreeCourse12(1, "Angular Bootcamp");
console.log(freeCourse12.title);
