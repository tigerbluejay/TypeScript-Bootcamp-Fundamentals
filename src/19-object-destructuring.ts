/* OBJECT DESTRUCTURING */
/* We can decompose an object into its components without having to do assignments one by one */

interface Course {
    title:string,
    subtitle:string,
    lessonsCount:number
}

let course:Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}

function printCourse(course:Course) {

// we could do this
    // const title = course.title;
    // const subtitle = course.subtitle;
    // const lessonsCount = course.lessonsCount;

// or we could use object destructuring notation

    // const {title, subtitle, lessonsCount} = course;

// to print out

    // console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);

// alternatively we could could group during an object destructring
// the properties that have not yet been destructred in a single variable
// like this

    const {title, ...other} = course;

    // to print out

    console.log(`Title: ${title}, Subtitle: ${other.subtitle}, Lessons Count: ${other.lessonsCount}`);

}