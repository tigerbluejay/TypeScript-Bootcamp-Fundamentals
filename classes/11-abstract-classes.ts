// we define the class to be abstract
// this makes the class a contract, that although can implement
// methods, it cannot be instantiated
// the contract is with the child classes, which should provide
// implementations for abstract methods

abstract class Course11 {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    // the constructor of an abstract class must be protected
    // because it is only callable by the constructor of the child
    // class
    protected constructor(
        protected _title:string, 
        protected _price: number,
        protected _subtitle = "",
        protected _creationDt = new Date(2000,0,1)){
    
        Course11.TOTAL_COURSES++;

        this.validatePrice();
    }

    // we are defining a method that must be implemented
    // by child classes
    protected abstract validatePrice();

    get title(){
        return this._title;
    }


}

class FreeCourse11 extends Course11 {

    constructor(
        _title:string, 
        _subtitle = "",
        _creationDt = new Date(2000,0,1)){
    
        super(_title, 0, _subtitle, _creationDt);
    }

    validatePrice() {
        console.log(`Called Free Course validate()`);
    }


}

// this will lead to an error
// we cannot create an instance of an abstract class
// const course11 = new Course11(Course11.TYPESCRIPT_TITLE, 100);
// console.log(course11.title);

console.log(Course11.TYPESCRIPT_TITLE);

const freeCourse11 = new FreeCourse11("Angular Bootcamp");
console.log(freeCourse11.title);

// freeCourse11.validatePrice(); // we can call the child method
// because the parent abstract method is not defined in the parent class