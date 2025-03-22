// console.log("S02")

//?Union Type
// let a: string | number = 0.325;

// a = "hello";

// a = false; // compiler error

//?Type Narrowing

// function checknumber(n: string | number): void {

//         n.
//     if(typeof n === "number"){
//         n.
//     }else{
//         n.
//     }
// }

//?Type Aliases

// type Mark = string | number

// let c : Mark="selam"

// c=2

// c=true //compiler error

//?String Literals

// type Car = "bmw" | "audi" | "mercedes" | 2022;

// let car1: Car = "bmw"
// let car2: Car = "audi"
// let car3: Car = "fiat"
// let car4: Car = 2022

//?Object

// const car: {
//   type: string;
//   model: string;
//   readonly year: number;
// } = {
//   type: "honda",
//   model: "crv",
//   year: 2020,
// //   hatchback:true //compiler error
// };

// car.year = 2021 //compiler error
// console.log(car.year)

//?Intersection

// type Book = {
//     readonly book_id:number,
//     book_name:string
// }

// type Author = {
//     author_id:number,
//     author_name:string
// }

// type Sales = Book & Author

// let sale1 : Sales = {
//     author_id:123,
//     author_name:"Tolkien",
//     book_id:456,
//     book_name:"King",
//     price:2000 // compiler error
// }

// sale1.book_id = 1 // compiler error

//?Type Assertions

// let str : unknown = "String"

// console.log(str.length) //compiler error

// console.log((<string>str).length)

// console.log((str as string).length)

// console.log(str.length)

// let score : unknown = 350

// console.log(score as number **2)

//?Functions

