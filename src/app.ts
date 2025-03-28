//!npm init -y (Proje başlatmak için komut)
//!npm i -D typescript (devdependies typescript yüklüyoruz)
//!tsc --init (tscompiler nasıl davranacığını ve ts.config dosyamız oluşur)
//!src ve out ik dosya açılır (ts.config dosyasından target=ES6, outDir="./out", rootDir="./src")
//!src içine app.ts aç (terminale tsc -w komutu uygula)
//!app.js'i index.html'e bağla




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

// function selamla(mesaj: string, isim: string = "konuk"): string {
//   // if(!isim) isim= "konuk"
//   return mesaj + " " + isim;
// }

// selamla("merhaba", 2024);
// console.log(selamla("merhaba"));
// console.log(selamla("merhaba", "dünya"));
// selamla("merhaba", "dünya", "2024");


//?Arrow 

// let topla =(a:number, b:number):number=>a+b

//?Functions Overloading

// function add(a:string, b:string):string

// function add(a:number, b:number):number

// function add(a:any, b:any): any{
//   return a + b
// }

//?Functions Rest Parameters

// function add(num:number, ...numbers:number[]):void{
//   let total = num

//   numbers.forEach(number=>total+=number)
//   console.log(total)
// }

// add(1)
// add(1,2,3)
// add(1,2,3,4)



//?Interfaces

interface Color {
    color:{r:number, g: number, b:number}
}

const red:Color = {color:{r:255, g: 0, b:0}}

