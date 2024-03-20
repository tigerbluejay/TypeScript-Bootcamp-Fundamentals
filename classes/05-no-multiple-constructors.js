/* In TypeScript you cannot define multiple constructors.
Multiple constructors are typically used to instantiate objects whose default property values are different.
In Typescript we can do that by assigning default property values on the constructor.

If we declare a class with all properties as parameters, the values of the parameters will be used.
But if we only pass one of many parameters and the other properties have default values assigned in the constructor
then those properties will be used when instantiating the class.

Now you may ask, what if i want multiple (more than 2) ways of instantiating the class,
in other words I want the values of the properties to vary on each instance of the class.
According to Vasco, that is a sign that the class is poorly designed. And you may need
multiple different classes */
var Course5 = /** @class */ (function () {
    function Course5(title, subtitle, creationDt) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDt === void 0) { creationDt = new Date(2000, 0, 1); }
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    return Course5;
}());
var course5a = new Course5("This is a title"); // In this instance
// the default constuctor values for subtitle and creationDt will be used
// to initalize the properties
console.log(course5a);
var course5b = new Course5("This is a title", "Learn the Fundamentals", new Date(2020, 11, 1));
// In this instance the parameter values will be used to initialize the properties
console.log(course5b);
