/* Making our classes generic (in this example <K, V>) has the advantage of making
the class type safe. Thus when we initialize "val1", "val2", and "val3", they will
infer their types and not simply be of type any */

class KeyValue<K, V> {

    constructor( 
        public readonly key: K,
        public readonly value: V) {
       }
    
    print() {
        console.log(`key = ${this.key} value= ${this.value}`);
    }
}

const p1 = new KeyValue("1", 10);
const val1 = p1.value; // val1 is inferred to be of type number

const p2 = new KeyValue(2, "Hello World");
const val2 = p2.value; // val2 is inferred to be of type string

const course: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the Fundamentals",
    lessonsCount: 10
}

const p3 = new KeyValue("3", course);
const val3 = p3.value; // val3 is inferred to be of type Course

/*  If instead we had the following:

class KeyValue {

    constructor( 
        public readonly key: any,
        public readonly value: any) {
       }
    
    print() {
        console.log(`key = ${this.key} value= ${this.value}`);
    }
}

val1, val2, and val3 would be of type "any" and would not be thus type safe*/