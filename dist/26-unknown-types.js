// avoid the use of the any and unknown types when possible
// if you want to bypass the type system use any
// if you don't know the type of your variable, and you intend
// to do a check, use unknown
var anyValue;
// we can define an any variable as anything
anyValue = true;
anyValue = 10;
anyValue = "Hello World!";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
// we an assign an any variable to a variable of any type
var value1 = anyValue; // here we assign anyValue variable to variable value1 of type unknown
var value2 = anyValue;
var value3 = anyValue;
var value4 = anyValue;
var value5 = anyValue;
var value6 = anyValue;
var value7 = anyValue;
var value8 = anyValue;
// with unknown things are different
// we can also define a variable of type unknown as anything
var unknownValue;
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
var value9 = unknownValue;
var value10 = unknownValue;
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
    var value17 = unknownValue;
}
// no compilation error
// we are effectively "type narrowing" from a general type "unknown" to "string"
// we can type narrow using instanceof and a simple equality check
