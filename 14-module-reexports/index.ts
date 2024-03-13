/* MODEL REEXPORT */
/* In Typescript we can export what we have already imported, this is called reexport.
This is useful in an import barrel, which we'll demonstrate here.
In an export barrel, we can have several items in different files (feature-1.ts, feature-2.ts, and so on)
and we can export them all to an "index.ts"(that's the name we should give to the file) and from that file
reexport them.
What's the point of this?
It helps us avoid having to reference each file individually (feature-1.ts, feature-2.ts, and so on) and
we can instead reference the root directory where the index file exists (this is a configuration convention).
*/

import { Course } from "./course-model";
import { loadAllCourses } from "./feature-1";
import { SaveCourse } from "./feature-2";

export {
    Course as IndividualCouse,
    loadAllCourses as loadfunctionality,
    SaveCourse as savefunctionality
}