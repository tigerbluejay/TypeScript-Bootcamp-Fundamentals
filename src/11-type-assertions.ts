/* TYPE ASSERTIONS */

/* There are times when we know more about the inferred type than the compiler does
This is common when making API calls or in this example: */

// const input = document.getElementById("input-field");

// Here the inferred type is "HTML Element"
// But what if we happen to know that this input is actual an "HTML Input Element"?
// In this case we can use one of two syntaxes

// const input = <HTMLInputElement> document.getElementById("input-field");
const input = document.getElementById("input-field") as HTMLInputElement;

// Now we can access properties and methods specific to the "HTMLInputElement" type
// that are not available to the "HTML Element" type.

input.value;

// In the rare cases we need to cast to another type but the compiler won't let us
// because there is no apparent relationship between the types (as there was between HTMLElement and HTMLInputElement)
// we can cast to type "any" and then to another type - like string, like this

const input2 = (document.getElementById("input-field") as any) as string;

