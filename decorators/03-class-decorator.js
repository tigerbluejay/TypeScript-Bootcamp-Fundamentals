"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealClass = void 0;
function SealClass() {
    return function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}
exports.SealClass = SealClass;
// alternative syntax if the class decorator does not take arguments
// with this syntax the decorator when called is called without the parenthesis
// so @SealClass instead of @SealClass()
// export function SealClass(constructor: Function) {
//         Object.seal(constructor);
//         Object.seal(constructor.prototype);
//     }
