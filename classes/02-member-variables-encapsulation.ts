/* INTRO TO OBJECT ORIENTED PROGRAMMING IN TYPESCRIPT */

// Typically in OOP we declare our properties as private
// This makes them mutable only from inside the class
// if no modifier is added, properties are public by default

// class Course {

//     private title:string;
//     private subtitle:string;
//     private creationDt:Date;

//     constructor(title:string, subtitle:string, creationDt:Date){
//         this.title = title;
//         this.subtitle = subtitle;
//         this.creationDt = creationDt;
//     }
// }

// const course = new Course("Typescript Bootcamp", "Learn the Fundamentals", new Date(2000,1,1));

// // so we can't do this:
// course.title = "New Value";

// Alternatively, if the properties are the same that the constructor receives
// we can use this alternative syntax:

// class Course {
//     constructor(private title:string, private subtitle:string, private creationDt:Date){
//     }
// }

// With this new syntax if we want to make the properties public then we need to specify it explicitly

class Course2 {
    constructor(public title:string, public subtitle:string, public creationDt:Date){
    }

    calculateAge() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 60 / 24 ); // this converts ms to days

    }
}
const course2 = new Course2("Typescript Bootcamp", "Learn the Fundamentals", new Date(2000,1,1));

// and then from outside the class we can modify the property
course2.title = "New title";

console.log(course2.calculateAge());