import {HasId, HasTitle} from "./12-interfaces-samples";
import { CoursesService } from "./13-courses-service-singleton";

abstract class Course13 implements HasTitle {

    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    protected constructor(
        public id:number,
        protected _title:string, 
        protected _price: number,
        protected _subtitle = "",
        protected _creationDt = new Date(2000,0,1)){
    
        Course13.TOTAL_COURSES++;

        this.validatePrice();

        CoursesService.instance(); // we invoke the singleton
    }

    protected abstract validatePrice();

    get title(){
        return this._title;
    }

    printId() {
        console.log(`The course id is ${this.id}`);
    }


}

class FreeCourse13 extends Course13 {

    constructor(
        id:number,
        _title:string, 
        _subtitle = "",
        _creationDt = new Date(2000,0,1)){
    
        super(id, _title, 0, _subtitle, _creationDt);
    }

    validatePrice() {
        console.log(`Called Free Course validate()`);
    }


}

console.log(Course13.TYPESCRIPT_TITLE);

const freeCourse13 = new FreeCourse13(1, "Angular Bootcamp");
console.log(freeCourse13.title);

CoursesService.instance(); // second call to instance will not generate
                           // a new instance because it is a singleton 
