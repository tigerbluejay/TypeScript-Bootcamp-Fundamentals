class Course3 {
    constructor(
        // if we declare a variable readonly
        // it can't be modified from inside or outside the class
        // it becomes immutable everywhere
        public readonly title:string, 
        // private just makes it immutable from outside the class
        private subtitle:string, 
        private creationDt:Date){
    }

    // with readonly the variable can't be modified from inside the class
    // setTitle() {
    //     this.title = "New Title"; // so this line won't compile
    // }

}
const course3 = new Course3("Typescript Bootcamp", "Learn the Fundamentals", new Date(2000,1,1));

// with readonly the variable can't be modified from outside the class
// course.title = "New title"; // So this line won't compile

