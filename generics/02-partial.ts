/* With the partial interface we can pass as parameter a partial of a class
and when calling the method we are allowed to modify only parts of that class
and we are not forced to provide in the method call all the properties of the object of that class
*/

export interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}

export function updateCourse(
    courseId:string, update: Partial<Course>) {

    }

updateCourse(
    "1", { title: "New version of Title" } );

updateCourse(
    "1", { subtitle: "New version of Subtitle" } );

updateCourse(
    "1", { subtitle: "New version of Subtitle 2", lessonCount: 10 } );
    
// these are all valid calls with the use of Partial