// avoid the use of the any and unknown types when possible
// if you want to bypass the type system use any
// if you don't know the type of your variable, and you intend
    // to do a check, use unknown

let anyValue: any;
// we can define an any variable as anything
anyValue = true;
anyValue = 10;
anyValue = "Hello World!";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
// we an assign an any variable to a variable of any type
let value1: unknown = anyValue; // here we assign anyValue variable to variable value1 of type unknown
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;


// with unknown things are different
// we can also define a variable of type unknown as anything
let unknownValue: unknown;
unknownValue = true;
unknownValue = 10;
unknownValue = "Hello World!";
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
// but we can assign it only to a variable of type any or unknown
// if we want to assign it to other typed variables we must first 
// do a check

let value9: unknown = unknownValue;
let value10: any = unknownValue;
// these won't work
/*
let value 11: boolean = unknownValue;
let value 12: number = unknownValue;
let value 13: string = unknownValue;
let value 14: object = unknownValue;
let value 15: any[] = unknownValue;
let value 16: Function = unknownValue;
*/
// this would however
if (typeof unknownValue == "string") {
    let value17:string = unknownValue;
}
// no compilation error

// we are effectively "type narrowing" from a general type "unknown" to "string"
// we can type narrow using instanceof and a simple equality check