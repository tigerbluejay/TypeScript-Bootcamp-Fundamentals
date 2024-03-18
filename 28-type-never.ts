// a variable of type never can't be assigned any value at all
// that is it cannot be assigned a value of type any, unknown, null, undefined,
// bool, number, string, object, array, Function etc..

// the never type is rare
// but it appears in type inference
// when the compiler infers a type to not be a valid type in certain situations
// let's see an example

// here course status takes only one of three possible values
type CourseStatus = "draft" | "published" | "unpublished";

let courseStatus: CourseStatus = "draft";

// suppose we receive course status field from a db
// we perform sanity checks
if (courseStatus == "draft"){
    // some code
} else if (courseStatus == "published") {
    // some code
} else if (courseStatus == "unpublished") {
    // soem code
} else {
    unexpectedError(courseStatus); // here the compiler infers courseStatus to be of type never (hover over the variable to see)
                                   // because we have narrowed down the values the most we could
                                   // no possible valid value exists for courseStatus as per the compiler
}

// so we can create a function to handle the never situation
// which should never occur, so we throw an error.
function unexpectedError(value:never){
    throw new Error(`Unexpected value: ${value}`);
}