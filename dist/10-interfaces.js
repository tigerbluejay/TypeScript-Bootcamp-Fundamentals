// INTERFACES
var course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
};
// we can apply the interface to another object
var course2 = {
    title: "TypeScript Bootcamp v2",
    subtitle: "Learn the fundamentals v2",
    // here we skip defining lessonsCount because of the ? in the interface
};
// this would not work because of readonly in the interface
// course.title = "Hello World";
// but there would be no problems overriding the subtitle of either of the objects
course.subtitle = "New Subtitle";
course2.subtitle = "New Subtitle v2";
var cart = {
    product: "Cheese",
    quantity: 2,
    discount: true // here we are taking advantage of the extended interface
};
