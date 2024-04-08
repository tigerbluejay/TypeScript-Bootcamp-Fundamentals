const someData = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Language, build practical projects",
    lessonCount: 100
}

const moreData = {
    seqNo: 10,
    price: 100
}

// we can merge this data in a single object using the assign method
// but the result will be an object of type any, so its not type safe

export function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

// here merged is of type any
const merged = merge(someData, moreData);


// here's a type safe merge function

export function safeMerge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U); // return type cast as the intersection of T and U
}

const merged2 = safeMerge(someData, moreData);
