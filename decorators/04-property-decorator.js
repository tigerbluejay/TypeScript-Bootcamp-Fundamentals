"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseId = void 0;
function DatabaseId() {
    // this is the decorator factory
    return function (classPrototype, propertyKey) {
        // here we generate a property
        // more specifically we are setting the id to a unique identifier if the id (the property) is not defined
        Object.defineProperty(classPrototype, propertyKey, {
            get: function () {
                // of the class that contains the property we are decorating
                if (!this["_id"]) {
                    // this is code to generate a unique identifier -
                    // in the real world you should use a library that generates unique identifiers instead of
                    // this patch
                    this["_id"] = Date.now().toString(36);
                }
                return this["_id"];
            }
        });
    };
}
exports.DatabaseId = DatabaseId;
