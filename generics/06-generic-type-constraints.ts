/* You can constrain the generic type being used in a function with the extends keyword */

/* For example we could modify this function

function freeze<T>(input:T): Readonly<T> {
    return Object.freeze(input);
}

into this

function freeze<T extends object>(input:T): Readonly<T> {
    return Object.freeze(input);
}

in this way, we make sure T stands for an object and not an int
or a boolean for example
*/
