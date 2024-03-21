
// an interface can define properties and methods
// they are all public by default and visibility can't be modified
export interface HasId {
    id:number,
    printId()
}

// another interface can extend an interface
// instead of duplicating properties
export interface HasTitle extends HasId {
    title:string;
}