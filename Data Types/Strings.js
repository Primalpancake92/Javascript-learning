/*
===============================================================================
                            STRINGS IN JAVASCRIPT
===============================================================================

Strings are basically a set of characters that are contiguously strung up 
together. You would basically declare it with a valid variable name, an 
assignment operator, and with either single, double quotes, or back ticks.

Let us see how it is done.
*/

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'

/*
There are some things that you can do with strings. Some of these may include 
string concatenation, long literal strings, escape sequences in strings, 
template literals, and some string methods (methods only act on reference 
objects. Remember that.)
*/

// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

Asabeneh Yetayeh

/* 
Concatentation can occur through adding variables that contains string. But they
can also add either string inside an output. For instance
*/

// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + space + lastName

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5

console.log(personInfoOne)

Asabeneh Yetayeh. I am 250. I live in Finland

/* 
A long literal string is a very long string that forms a paragraph. If the 
string is too long, then we can use the backslash to indicate it will continue
on a new line and the string will continue on a new line.
*/

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)
 
This will output the message in the variable.

/*
In JavaScript and other programming language \ followed by some characters is
an escape sequence. Let's see the most common escape characters: /n, /t, //,
\', and \".
*/

console.log('I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a back slash  symbol (\\)') // To write a back slash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' is\'t correct in 2020')

/*
Template literals of javascript are basically the same as formatted strings in 
Java and Python. You must use two back ticks in order to create a template
literal. To inject data in the template literal, you would need to use curly 
brackets followed by the dollar sign.
*/

//Syntax
`String literal text`
`String literal text ${expression}`

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
