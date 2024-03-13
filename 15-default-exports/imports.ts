
// this is the star(*) as syntax
import * as constants from "./exports";
// now we can use the variables by accessing constants
constants.COURSE_TOTAL;
constants.TYPESCRIPT_COURSE;
constants.default; // this is printCourse because we marked it as default


// this is the default syntax
import printCourse from "./exports";
// no brackets needed because we marked printCourse as default
