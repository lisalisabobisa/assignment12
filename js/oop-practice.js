// STEP 1
// function Cat() {
//    
// }
// const Dog = function() {
//     constructor() {
       
//     }
// }
// STEP 2
// const theCat = new Cat();
// const theDog = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log("The animal has been created.");
//     }
// }
// const theDog = new Animal();

// STEP 4
// class Animal {
//     constructor(type) {
//         this._cat = type;
//         console.log(`This animal is a ${this._cat}.`);
//     }
// }
// const theDog = new Animal('cat');

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._cat = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//         console.log(`The ${this._cat} is a ${this._breed} that is ${this._color}, ${this._height} tall, and ${this._length} long.`);
//     }
// }
//const theDog = new Animal('cat', 'bengal', 'multi-colored', '18 inches', '30 inches');

// STEP 6
// function Animal(type, breed, color, height, length) {
//         this._cat = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
// }
// let obj = new Animal('cat', 'bengal', 'brown', '18inches', '30inches');
// for (const prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//         console.log(`${obj[prop]}`);
//     }
// }


// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// Animal.prototype.speak = function() {
//     if (this.type === "dog") {
//         return `the ${this.color} dog is barking!`;
//     } else if (this.type === "cat") {
//         return `the ${this.color} cat is meowing!`
//     };
//     return this.type;

// }
// let dog1 = new Animal('cat', 'bengal', 'brown', '18inches', '30inches');
// console.log(dog1.speak());



// STEP 8
// function Animal(type, breed, color, height, length) {
//         let_type = type;
//         let_breed = breed;
//         let_color = color;
//         let_height = height;
//         let_length = length;
        
//         let checkType = function() {
//             if (type === "dog") {
//                 return `${type}`;
//             } else if (type === "cat") {
//                 return `${type}`
//             };
//             return type;
//         }
        
//         this.speak = function() {
//             return `the ${checkType()} has made a noise.`;
//         }
// }
//     let dog1 = new Animal('cat', 'bengal', 'brown', '18inches', '30inches');
//     console.log(dog1.speak());
   


// STEP 9
// const words = {
//     wordList: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down."

//     findWords = function() {
//         for (let i; i < wordList.length; i++) {
                // if (wordList === "Hopes") {
                //     counter ++;
                // }
//         }
//     }
// }