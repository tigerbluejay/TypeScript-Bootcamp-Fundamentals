class Course6 {
    constructor(
        private _title:string, 
        private _subtitle = "", 
        private _creationDt = new Date(2000,0,1)){
    }

    get title(){
        return this._title; // this refers to the current object, not any course6, but either course6a or course6b
    }

    set title(newTitle:string){
        if (!newTitle) {
            throw "Title cannot be empty";
        }
        this._title = newTitle;
    }

}

const course6a = new Course6("TypeScript Bootcamp");
console.log(course6a.title); // this calls the getter "title"
// which returns this.title, which is to say, the title
// of the current instance (course6a), which is "TypeScript Bootcamp"

const course6b = new Course6("Angular Bootcamp");
console.log(course6b.title); // this calls the getter "title"
// which returns this.title, which is to say, the title
// of the current instance (course6b), which is "Angular Bootcamp"
