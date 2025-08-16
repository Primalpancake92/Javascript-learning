Arrays are data structures that stores a collection of values. They are instantiated 
via two ways:

let array1 = new Array(10); This is similar to the Java way of doing it.

In modern practices of Javascript, it is preferrable to invoke arrays by
using the array literal notation, which is:

let array2 = [element1, element2, element3, element4, ....]; 

We can access individual objects through indexing, which is done by:

let someArrayObject = someArray[someIndex]; where the element can be printined on the console.

You can get the size of the array through the following property/class attribute: 

let n = someArray.length;
console.log(n);

Here are some other useful methods:
someArray.push(); To append elements to the array
someArray.unshift(); Addition of an element to the start of the array
someArray.shift(); Removal of an element at the start of the array
someArray.pop(); Removes the last element of the array
someArray.indexOf(someObject); Returns the index of a data object in the array
Array.isArray(someArray); Returns a boolean to check if the array is an array