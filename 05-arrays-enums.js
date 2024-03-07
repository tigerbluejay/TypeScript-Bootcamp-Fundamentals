/* ARRAYS */
var numbers = [1, 2, 3];
numbers.push(4);
// ts arrays have common js methods like map, push, pop, length
// Define an array of numbers
var numbers2 = [1, 2, 3, 4, 5];
// Define a function to double each element
var double = function (num) { return num * 2; };
// Use map to create a new array with doubled elements
var doubledNumbers = numbers.map(double);
// Print the original and doubled arrays
console.log("Original numbers:", numbers2);
console.log("Doubled numbers:", doubledNumbers);
/* ENUMS */
// A custom type
// We use a numeric value but we are using it to identify another item
// At runtime the value of the enum is converted to a numeric value
// At runtime Free will be 0, Premium 1 and so on...
var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 2] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course4 = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN
};
console.log(course4);
console.log(course4.type);
// We can also map enums to different than the standard numbers
// or even strings, then at runtime the value at the right side
// of the equalities will be used for those enums
// enum CourseType2 {
//     OPTION1 = 10, OPTION2 = 20, OPTION3 = 5, OPTIOND = 0
// }
// enum CourseType3 {
//     TYPEA = "A", TYPEB = "B", TYPEC = "C", TYPED = "D"
// }
