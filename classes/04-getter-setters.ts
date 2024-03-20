class Course4 {
    constructor(
        // we append the underscore to distinguish properties from setters
        private _title:string, 
        private _subtitle:string, 
        private _creationDt:Date){
    }


    // setters are great for providing public write access for a property
    // while adding business logic to make sure we don't assign invalid values to a property
    set title(newTitle:string){
        if (!newTitle) { // if newTitle is an empty string
                throw "Title cannot be empty";
        }
        this._title = newTitle;
    }

    // a method can be qualified as a getter
    // getters are great to access a calculated property
    get calculateAge() {
        const ageInMs = new Date().getTime() - this._creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 60 / 24);
    }
}

const course4 = new Course4("Typescript Bootcamp", "Learn the Fundamentals", new Date(2000,1,1));

// with the setter we can set a new value for the property _title
course4.title = "New Value";
console.log(course4.calculateAge); // since calculate age is a getter method, it doesn't require parenthesis to invoke it

