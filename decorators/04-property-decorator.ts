export function DatabaseId(): PropertyDecorator { // function name is the same as the decorator
    // this is the decorator factory
    return (classPrototype: any, propertyKey: string) => { // propertyKey is the name of the property we are applying the decorator to
        // here we generate a property
        // more specifically we are setting the id to a unique identifier if the id (the property) is not defined
        Object.defineProperty(classPrototype, propertyKey, {
            get: function() { // we use the function syntax so that the this keyword we use refers to the instance of
                              // of the class that contains the property we are decorating
                if (!this["_id"]) { 
                    // this is code to generate a unique identifier -
                    // in the real world you should use a library that generates unique identifiers instead of
                    // this patch
                    this["_id"] = Date.now().toString(36);
                }
                return this["_id"];
            }
        })
    }
}