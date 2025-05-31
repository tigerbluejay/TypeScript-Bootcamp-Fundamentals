# 📘 TypeScript Bootcamp Fundamentals
## 🧭 Abstract: Introduction to TypeScript
This repository provides a theory-rich, example-driven introduction to TypeScript, Microsoft's statically typed superset of JavaScript. It emphasizes understanding how TypeScript's type system enhances JavaScript development through improved tooling, early error detection, and maintainability. Each concept is explained through annotated code snippets and inline commentary, covering everything from basic type inference to complex type constructs like union types, generics, and decorators. This section focuses on the foundational features of TypeScript as a language, setting the stage for further sections on configuration, object-oriented programming, and advanced topics.

### 🧱 TypeScript Type System
TypeScript introduces a static type system to JavaScript, allowing developers to catch errors at compile time instead of runtime. Types can be inferred automatically or explicitly declared using annotations. This leads to safer, more predictable code.

### ❌ Don't Generate a JS File If Errors Exist
By default, TypeScript might generate a .js output even if there are type errors. However, you can prevent this by enabling the noEmitOnError flag in tsconfig.json, ensuring that your code is type-safe before it's transpiled.

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

### 🌐 How to Run TS in a Browser
TypeScript must be compiled to JavaScript before it can run in the browser. This is done using the tsc command, and the resulting .js file is included in your HTML. You can also use bundlers like Webpack or tools like Vite for a modern setup.

### 🛠️ Running TypeScript
To run a TypeScript file:

```bash
tsc index.ts
node index.js
```
Or use ts-node for direct execution:

```bash
npx ts-node index.ts
```

🔄 Const vs Let vs Var
const: immutable bindings (the reference cannot change).

let: block-scoped, mutable.

var: function-scoped, hoisted — generally avoided in modern TypeScript.

### 🔍 Type Inference
TypeScript can infer types from the context. If you write:

```ts
let name = "Jose";
```

TypeScript infers name as a string. But inference isn't perfect, so annotations are often helpful.

### ✍️ Type Annotations
Explicitly declare variable types:

```ts
let age: number = 44;
let name: string = "Jose";
This enhances clarity and helps catch bugs early.
```

### 🔗 Template Strings
Template literals allow string interpolation:

```ts
let greeting = `Hello, ${name}!`;
This is fully compatible with TypeScript and supports embedded expressions.
```

### 🧬 Static Type System
TypeScript performs static type checking — it analyzes types without running the program. This means errors like passing a string to a function expecting a number can be caught early.

### 🧱 Primitive Type: Object
The object type refers to non-primitive types. You can define the shape of objects like this:

```ts
let user: { name: string; age: number } = {
  name: "Jose",
  age: 44
};
```

### 🧩 Nested Objects
Nested structures are typed recursively:

```ts
type Address = {
  street: string;
  city: string;
};

type User = {
  name: string;
  address: Address;
};
```

### ❓ Null vs Undefined
undefined: variable declared but not assigned.

null: explicitly no value.

Use strict null checks (strictNullChecks: true) for better safety.

### 🔄 Null Coalescing Operator (??)
Used to provide a default value only if the left-hand operand is null or undefined.

```ts
let input = userInput ?? "default";
```

🔗 Optional Chaining (?.)
Safely access deeply nested properties:

```ts
let city = user?.address?.city;
```
No error is thrown if address is undefined.

### 📚 Arrays
Typed arrays use type[] or Array<type>:

```ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];
```

### 📜 Enums
Enums define a set of named constants:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```
Useful for readable, organized code.

### 🧨 The Any Type
any disables type checking, reverting to JavaScript's dynamic behavior. Avoid using unless necessary.

```ts
let data: any = fetchData();
```

⚠️ No Implicit Any Flag
The noImplicitAny flag disallows variables or parameters from having an inferred type of any.

### ❗ Non-Null Assertion Operator (!)
Used to tell TypeScript a value is not null or undefined, even if it thinks otherwise:

```ts
element!.value;
Use with caution.
```

### 🔗 Union Types
Allow a variable to have multiple types:

```ts
let id: string | number;
```

### 🔐 Literal Types
Restrict a variable to a specific set of values:

```ts
let direction: "left" | "right";
```

### 🏷️ Type Aliases
Create reusable custom types:

```ts
type Point = {
  x: number;
  y: number;
};
```

### 🔄 Interfaces
Used to define object shapes:

```ts
interface User {
  name: string;
  age: number;
}
```

### 🥊 Interfaces vs Type Aliases
interface is extendable and used for object shapes.

type is more flexible (unions, intersections, etc.).

Use interface for OOP-like design; type for more complex expressions.

### 🧠 Type Assertions
Override inferred types when you're sure:

```ts
let input = document.getElementById("name") as HTMLInputElement;
```

📦 Modules, Exports and Imports
TypeScript uses ES module syntax:

```ts
export const foo = 42;
import { foo } from "./module";
```

### 🔁 Model Re-Export
You can re-export symbols from other modules:

```ts
export * from "./foo";
```

### ✳️ Default Exports and * as Syntax

```ts
export default function greet() { ... }
import greet from "./greet";
import * as utils from "./utils";
```

### ⚙️ Default Function Arguments
You can set default values for parameters:

```ts
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

### 🌐 Object Spread Operator
Clone and merge objects:

```ts
let copy = { ...original, age: 30 };
```

### 🧯 Object Destructuring
Extract values from objects:

```ts
let { name, age } = user;
```

### 📦 Rest Arguments
Capture additional arguments:

```ts
function log(...messages: string[]) {
  console.log(messages);
}
```

### ✨ Object Creation Shorthand
Use property shorthand when key and value share names:

```ts
let name = "Jose";
let user = { name }; // same as { name: name }
```

### 🕹️ Functions at Runtime
TypeScript annotations are erased at runtime. TS types are purely for development and tooling — the JS output has no type checks.

### 🐞 TypeScript Debugging in the Browser
Use source maps (sourceMap: true) to map compiled JS back to TS in browser dev tools.

### 🧪 TypeScript Debugging as a Node Process
Use ts-node, breakpoints, and tools like VSCode's debugger to inspect TS code during execution.

### 🧮 Function Types
You can specify function signatures:

```ts
type Greet = (name: string) => void;
```

### 🧺 Tuples
Typed arrays with fixed length and types:

```ts
let person: [string, number] = ["Jose", 44];
```

### 🕵️‍♂️ Unknown Types
Safer alternative to any. Requires type checking before use:

```ts
let value: unknown;
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### 🔍 Type Predicates
Helps TypeScript infer types in custom checks:

```ts
function isString(val: unknown): val is string {
  return typeof val === "string";
}
```

### 🚫 The never Type
Used for functions that never return:

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

### 🔗 Intersection Types
Combine multiple types:

```ts
type Admin = { role: string };
type User = { name: string };

type AdminUser = Admin & User;
```

## ⚙️ TypeScript Configuration (tsconfig.json)
TypeScript supports project-wide configuration via a tsconfig.json file, which stores compilation options and project metadata. This section details commonly used compiler options and patterns for organizing and compiling projects.

### Key Configuration Properties
- target: Specifies the ECMAScript version (ES5, ES2015, etc.) of the output JavaScript.
- rootDir / outDir: Defines source and output directories. Useful to separate .ts and .js files.
- module: Declares the module system for imports/exports, typically "CommonJS" for Node.js environments.
- sourceMap: Enables source map generation for browser debugging.
- noEmitOnError: Prevents .js generation if there are compilation errors.
- strictNullChecks: Forces explicit null/undefined checks.
- removeComments: Strips comments from generated files.
- noEmit: Suppresses output; useful for type checking only.
- allowJs / checkJs: Enables importing JavaScript files and enforcing type checking on them.
- types / typeRoots: Includes or excludes specific type definitions, like @types/express.
- lib / noLib: Controls the standard libraries included in the compilation (e.g., "DOM", "ES2015").
- baseUrl: Defines the base path for non-relative module imports.

### File Inclusion Strategies
- files: Manually list specific files to include in compilation.
- include / exclude: Use glob patterns to control which files/directories are compiled.
You can also use custom filenames for your config file (custom.tsconfig.json) and compile using tsc --project.

## 🧱 Object-Oriented Programming in TypeScript
TypeScript brings full OOP capabilities to JavaScript, including classes, access modifiers, inheritance, interfaces, and abstract classes.

### Classes and Constructors
You define classes using the class keyword. Constructors initialize properties. If constructor arguments match property names and types, you can declare and initialize them in one step using public, private, or readonly.

```ts
class Course {
  constructor(
    public readonly title: string,
    private subtitle: string,
    private creationDt: Date
  ) {}
}
```

### Access Modifiers
- public: Default. Accessible everywhere.
- private: Accessible only within the class.
- protected: Accessible in the class and its subclasses.
- readonly: Cannot be reassigned after initialization.

### Getters and Setters
Use get/set to encapsulate logic for property access:

```ts
get title() {
  return this._title;
}
set title(value: string) {
  if (!value) throw "Title cannot be empty";
  this._title = value;
}
```

### Static Members
- Shared across all instances.
-Accessed via the class name, not this.

```ts
static readonly TYPESCRIPT_TITLE = "TS Bootcamp";
```

### Inheritance and Superclasses
Subclasses extend base classes with extends, calling super() to inherit behavior. Use override behavior carefully, especially when constructors call methods that subclasses may override.

### Abstract Classes
Use abstract classes and methods to define contracts that subclasses must implement. Abstract classes cannot be instantiated directly.

```ts
abstract class Course {
  abstract validatePrice(): void;
}
```

### Interfaces
Interfaces define contracts (shapes) that classes must fully implement. They can extend other interfaces.

```ts
interface HasId {
  id: number;
  printId(): void;
}
```

A class can implement multiple interfaces:

```ts
class Course implements HasId {
  id: number;
  printId() { console.log(this.id); }
}
```

### Singleton Pattern
Create single-instance classes using a private constructor and a static accessor:

```ts
class CoursesService {
  private static INSTANCE: CoursesService;
  private constructor() {}
  static instance() {
    if (!this.INSTANCE) this.INSTANCE = new CoursesService();
    return this.INSTANCE;
  }
}
```

## 📦 Generics in TypeScript
Generics allow you to write reusable, type-safe code that works with any type.

### Generic Types
```ts
function freeze<T>(input: T): Readonly<T> {
  return Object.freeze(input);
}
```

### Type Constraints with extends
```ts
function freeze<T extends object>(input: T): Readonly<T> {
  return Object.freeze(input);
}
```

### Utility Types
- Partial<T>: All properties optional.
- Readonly<T>: All properties immutable.

```ts
function updateCourse(id: string, update: Partial<Course>) { ... }
```

### keyof Operator
Extracts a union of property names from a type:

```ts
type CourseKeys = keyof Course;
function extractProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

### Generic Classes
```ts
class KeyValue<K, V> {
  constructor(public readonly key: K, public readonly value: V) {}
}
```

### Merging with Generics
```ts
function safeMerge<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}
```

## 🧪 Decorators in TypeScript
Decorators provide a meta-programming mechanism to enhance classes, methods, properties, and parameters without inheritance.
- ⚠️ Requires "experimentalDecorators": true in tsconfig.json.

### Method Decorators
Used to wrap, modify, or log method behavior:

```ts
function Log(level: LoggingLevel): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (level <= appMaxLoggingLevel) {
        console.log(`>> log: ${propertyKey}, ${JSON.stringify(args)}`);
      }
      return original.apply(this, args);
    };
  };
}
```

Use it like:

```ts
@Log(LoggingLevel.DEBUG)
saveData(data: any) { ... }
```

### Class Decorators
Used to seal or modify class constructors:

```ts
function SealClass(): ClassDecorator {
  return constructor => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  };
}
```

### Property Decorators
Used to define custom behavior for class properties, like injecting unique IDs:

```ts
function DatabaseId(): PropertyDecorator {
  return (target, key) => {
    Object.defineProperty(target, key, {
      get() {
        if (!this["_id"]) this["_id"] = Date.now().toString(36);
        return this["_id"];
      }
    });
  };
}
```
