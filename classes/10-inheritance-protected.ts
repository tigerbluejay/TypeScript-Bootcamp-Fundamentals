class Course10 {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    constructor(
        // we change these properties to protected from private 
        // if we want the properties
        // to be visible by the child class
        protected _title:string, 
        protected _price: number,
        protected _subtitle = "",
        protected _creationDt = new Date(2000,0,1)){
    
        Course10.TOTAL_COURSES++;

        this.validatePrice();
    }

    // if we want to make this method available to child classes
    // and not outside the class, we use the protected keyword
    protected validatePrice() {
        if (this._price <= 0) {
            throw "Price must be larger than zero";
        }
    }

    get title(){
        return this._title;
    }


}

class FreeCourse10 extends Course10 {

    constructor(
        _title:string, 
        _subtitle = "",
        _creationDt = new Date(2000,0,1)){
    
        super(_title, 0, _subtitle, _creationDt);
    }

    // we must implement protected here too, because
    // we cannot define it as private
    // if we don't implement protected the method will
    // become public
    protected validatePrice() {
        console.log(`Called Free Course validate()`);
        // this._price // we can access the parent price because it is protected
    }


}


const course10 = new Course10(Course10.TYPESCRIPT_TITLE, 100);
console.log(course10.title);
// course10.validate(); // this will fail because validate() is protected

console.log(Course10.TYPESCRIPT_TITLE);

const freeCourse10 = new FreeCourse10("Angular Bootcamp");
console.log(freeCourse10.title);
// freeCourse10.validate(); // this will fail because validate() is protected
