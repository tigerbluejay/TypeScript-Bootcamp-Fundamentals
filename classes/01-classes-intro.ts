/* INTRO TO OBJECT ORIENTED PROGRAMMING IN TYPESCRIPT */

/* Typescript supports both functional and object oriented programming.
The Date api is object oriented. You have to call the constructor with the new keyword
when you instantiate the class and create an object
const date = new Date();
The Promise api is also object oriented.
And Angular is object oriented, each component corresponds to a class */

// let's give an example of a class
// a class is an abstraction specifying properties and behaviors
// it is a blueprint
class Course {

    // data that the class contains (properties)
    title:string;
    subtitle:string;
    creationDt:Date;

    // a method called when we instantiate a class that is
    // when we create an object
    constructor(title:string, subtitle:string, creationDt:Date){
        // populating the properties with values
        // initalize the data of the class
        // this points to the current instance of the class
        // in other words to the title property of the current instance
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }

    // the methods are the behaviors
    calculateAge() {
        // the current date - the creation date is the age in milliseconds
        // this refers to the current instance of the class
        // in other words to the creationDt of the object we have created
        // when we instantiated the class
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 60 / 24 ); // this converts ms to days
        // /1000 to seconds, /60 to minutes, /60 to hours, /24 to days
        // round converts from floating point to int

    }
}

// create an instance of the course class
const course = new Course("Typescript Bootcamp", "Learn the Fundamentals", new Date(2000,1,1));

console.log(course.calculateAge());

// tsc .\01-classes-intro.ts // compile the program
// node .\01-classes-intro.js // run the program
