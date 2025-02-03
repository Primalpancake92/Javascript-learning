// In this section, the equals only covers loose equality. What does this mean?
// It means that data of different data types that have the same value are the same.

// Let us compare "" and false. This will evaluate as true

console.log("" == false); // true
console.log(0 == false); // true
console.log(undefined == null); // true

// But null cannot be undefined

//console.log(null = undefined); // error as it is the absence of value

// So there is some issues with loose equality. 
// To rectify this, we have strict equality (===) and it checks for data types too!

console.log("" === false); // false
console.log(0 === false); // false
console.log(undefined === null); // false

// Problemo solved