// INTERFACES

// More common than type-aliases are interfaces
// when we are dealing with objects

interface Course {
    readonly title: string; // readonly makes title non writable
    subtitle: string;
    lessonsCount?:number; // the ? makes lessonsCount an optional parameter
}

const course: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
};

// we can apply the interface to another object
const course2: Course = {
    title: "TypeScript Bootcamp v2",
    subtitle: "Learn the fundamentals v2",
    // here we skip defining lessonsCount because of the ? in the interface
};

// this would not work because of readonly in the interface
// course.title = "Hello World";

// but there would be no problems overriding the subtitle of either of the objects
course.subtitle = "New Subtitle"
course2.subtitle = "New Subtitle v2"

// this is so despite the const keyword before the courses
// the const only protects the course proper (or course2) from being assigned null or something else
// but the items inside the object are not protected by const



//** INTERFACES VS TYPE ALIASES **//
// The Ts documentation recommends the use of interfaces for objects, not type aliases
// Interfaces can be extended, they are open to extension - not so for type aliases

interface ShoppingCart {
    product: string,
    quantity: number
}

const cart: ShoppingCart = {
    product: "Cheese",
    quantity: 2,
    discount: true // here we are taking advantage of the extended interface
};

// here we add a new variable to the original interface
// which can be used even above this line
interface ShoppingCart {
    discount: boolean,
}

