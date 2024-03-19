"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.savefunctionality = exports.loadfunctionality = void 0;
var feature_1_1 = require("./feature-1");
Object.defineProperty(exports, "loadfunctionality", { enumerable: true, get: function () { return feature_1_1.loadAllCourses; } });
var feature_2_1 = require("./feature-2");
Object.defineProperty(exports, "savefunctionality", { enumerable: true, get: function () { return feature_2_1.SaveCourse; } });
