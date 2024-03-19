// Always prefer to define custom object types in your program over tuples
// Tuples can be useful to return unrelated values from a function

// define a tuple:
type CourseRecord = [string, string, number];

// initialize the tuple:
const courseRecord: CourseRecord = ["TypeScript Bootcamp", "Learn the Fundamentals", 100];

// create a function and add the tuple as the return type
function createCourse(title:string, subtitle:string) : CourseRecord {

        console.log(`Creating course with Title: ${title}, Subtitle: ${subtitle} `);

        // return the tuple
        return [title, subtitle, 100];

}