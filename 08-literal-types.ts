// LITERAL TYPES

// with let, title is assigned by the compiler the type string
let title = "This is a title";
// but with const title2 is assigned the type "This is another title"
const title2 = "This is another title";
// these are called literal types

// if we want pageSize to take only three possible values
// we can do
let pageSize: 10 | 15 | 20 = 10;

// this would work:
pageSize = 15;
// this would not:
// pageSize = 7;


// if we want courseStatus to take only these values we do
let courseStatus: "draft" | "published" | "unpublished" |
"archived" = "draft";

// this would work:
courseStatus = "published";
// this would not:
// courseStatus = "new";
