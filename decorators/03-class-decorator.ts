
export function SealClass(): ClassDecorator {
    return (constructor: Function) => {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
}

// alternative syntax if the class decorator does not take arguments
// with this syntax the decorator when called is called without the parenthesis
// so @SealClass instead of @SealClass()
// export function SealClass(constructor: Function) {
//         Object.seal(constructor);
//         Object.seal(constructor.prototype);
//     }