/*
==========================================================================================
                                NUMBERS IN JAVASCRIPT
==========================================================================================

Number data types can in two forms, which are integers and in float values. 
Declaring number types would be similar to below.
*/

let age = 35;
const gravity = 9.81;  //we use const for non-changing values, gravitational constant in  m/s2
let mass = 72;         // mass in Kilogram
const PI = 3.14;       // pi a geometrical constant

//More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

/*
Math objects is practically an object that is from the Math class, which has a 
group of methods that you can use to your liking or whatever you may be working
on.

Here are some examples.
*/

const PI = Math.PI

console.log(PI)                           // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))               // 3 to round values to the nearest number

console.log(Math.round(9.81))             // 10

console.log(Math.floor(PI))               // 3 rounding down

console.log(Math.ceil(PI))                // 4 rounding up

console.log(Math.min(-5, 3, 20, 4,5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4,5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      //10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))      //1.4142135623730951

// Power
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2))    // 0.6931471805599453
console.log(Math.log(10))   // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

/*
This type of class is just something that is very similar to 
the Math methods from the Math class that is preesnt in python.
*/