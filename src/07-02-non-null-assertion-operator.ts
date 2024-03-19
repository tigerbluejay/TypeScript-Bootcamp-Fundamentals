
let courseId: number | null;

courseId!.toString();

// the NON NULL ASSERTION OPERATOR OR BANG
// this affixed to the variable when calling it
// allows us to tell the compiler that we KNOW that the variable will not be null
// so the compiler won't throw an error

// if we compile with the strict nulls checks flag or if we compile in a version of ts that enforces the flag by default
// tsc --strictNullChecks 07-02-non-null-assertion-operator.ts
// it will compile correctly

// But this is just telling the compiler to compile, it will not prevent errors at runtime
// when courseId is null or undefined.

// To avoid those kind of errors we use the null undefined chaining operator
// courseId?.toString();
// which only would convert to string if courseId is not null or undefined.
