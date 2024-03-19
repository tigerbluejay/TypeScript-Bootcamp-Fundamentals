// intersection types are useful
// when you want to combine multiple types
// together and form a new type

interface HasId { id:string;}
interface HasTitle { title:string; description:string;}

type Course = HasId & HasTitle;

const course:Course = {
    title: "This is the title",
    id: "01",
    description: "This is the description"
}