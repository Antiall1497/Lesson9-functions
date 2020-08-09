`use strict`

// function pow(x,n) {
//     let result = x;

//     for(let i = 1; i < n; i++) {
//      result *=x;
// }

// return result;
// }

// // let x = prompt("x?");
// // let n = prompt("n?");

// // if(n<1){
// //     alert(`Используйте натуральные числа`);
// // } else {
// //     alert ( pow(x,n) );
// // }if(x>10000){
// //     console.log(max-number);
// // } else if (x<10){
// //     // console.log(if);
// // }

// // let input = prompt("Enter any number");

// const cat = {
// color: "black",
// weight: 4000,
// amountOfLegs: 5,
// isMale: false,
// eyes: {
//     amountOfEyes: 2,
//   eyeColor: "green",
//   },
// };

// console.log(cat);
// console.log(cat.eyes.amountOfEyes);

// const dog = {
//     color: "orange",
//     size: "middle",
//     amountOfLegs: 10,
//     isMale: true,
//     tale: {
//         isLong: "long",
//         color: "orange",
//     },
//     sayHi() {
//         return "WOF";
//     }
// };

// console.log(dog);
// console.log


// function Cat(color, name, breed, weight) {
//     this.color = color;
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;

// this.present = function () {
//     return `My name is ${name}`
// }

//     this.sayHi = function () {
//         return "my name is Pirat"
//     };
// }

// const cat1 = new Cat("white", "Barsik", "sphinx", 3000)
// const cat2 = new Cat("white", "Rishik", "sphinx", 3000)
// const cat3 = new Cat("white", "Pirat", "sphinx", 3000)
// const cat4 = new Cat("white", "Vanya", "sphinx", 3000)



// console.log(cat1, cat2, cat3, cat4);

// function Country(name, population, area, density) {
//     this.name = England;
//     this.population = "55 millions";
//     this.area = "133 396 км²"
//     this.density = "419,6 чел./км²"

//     this.nameOfCountry = function () {
//         return `My name is England`;
//     };

// this.populationOfCountry = function (){
//     return `55 millions`;
// };

// this.area = function () {
//     return `133 396 км²`;
// };

// this.density = function () {
//     return `419,6 чел./км²`;
// };

// }

// const Country = newCountry("England", "55 millions", "133 396 км²")

// console.log(Country);



// function Car(color, speed, condition) {
//     this.color = color;
//     this.speed = speed;
//     this.condition = condition;

//  this.speeed = function () {
//     return `Cars speed is 70 km/h` 
// };

// const car1 = new Car("yellow", "70 km per hour", "is moving");

// console.log(car1);

// function Box(size, color, content) {
//     this.content = content;
//     this.size = size;
//     this.color = color;

//     this.open = function () {
//         return `${this.content} opened`;
//     };
// }

// function Crate(size, material, content) {
//     this.content = content;
//     this.size = size;
//     this.material = material;
// }

// Crate.prototype = new Box();

// const crate1 = new Crate("bananas", "big", "wood");

//  console.log(crate1);
// console.log(crate1.open());


// function User(isMale, age, name) {
//     this.isMale = isMale;
//     this.age = age;
//     this.name = name;

//     this.sayHi = function () {
//         return `My name is Alex`;
//     };
// }

// function Employee(IsMale, age, name) {
//     this.IsMale = IsMale;
//     this.age = age;
//     this.name = name;
// }

// Employee.prototype = new User();

// const employee1 = new Employee("male", "20", "Alex");

// console.log(employee1);
// console.log(employee1.sayHi());



// const string = "store";

// let city1 = string;
// let city2 = string;

// console.log(city1);
// console.log(city2);

// city1 += " very big city store";

// console.log(city1);

// const controlObj = {
//     content: "store",
//     test: "city"
// };

// const anotherObj = controlObj;

// console.log(controlObj);
// console.log(anotherObj);

// const cityObj = anotherObj;

// console.log(cityObj);


// function massive(arr1){
//   const arr = [ 
//  111,
//  222,
//  true,
//  "string",
//  function () {},
//  555,
//  666,
//  777,
//  false,
//   ];

// }

// console.log(massive);

// console.log(111, 222, true, "string", 555, 666, 777, false);


const controlArray = ["test", 12345,"test3","test4",true];

function MyArray() {
this.length = 0;

for(let i = 0; i < arguments.length; i++) {
  this[this.length] = arguments[i];

  this.length++;
}

this.push = function(controlArray) {
  return controlArray;
}
this.pop = function(controlArray) {
  this.length = 20;
};
}

console.log(MyArray);
console.log(MyArray.length);