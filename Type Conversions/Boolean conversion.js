let someString = "1";

console.log(typeof someString); //prints out value type.

let someBoolean = Boolean(someString);

console.log(typeof someBoolean); // prints out a boolean value

console.log(someBoolean); // prints out true, as it isnt empty.

/*
Note that for string, if the string is not empty then it is 
evaluates to 'true'. For number values, if it is '1', it is 
true, and vice versa for '0'.