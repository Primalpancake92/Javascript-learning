/*
==========================================================================================
                        REFRERENCE VS PRIMITIVE DATA TYPES
==========================================================================================

There are two primary data types present in Javascript, and these data types are primitive
and reference types.

Primitive types could include numbers, strings, characters, boolean values, null values, 
or not defined. Primitive types are literally just values that are stored in memory. 
Something you will notice is that these data types cannot be changed, only reassigned.
This means that primitive data types are immutable.

The other data type that is present in javascript is reference or non-primitive types. 
These types are like data structures, objects, and functions. The value in which they 
contain are not something stored in memory. What they do store is the reference or 
pointer in which the data is located at. It never stores the value explicitly. These 
types of data can be referred to as mutable data types.

Now drawing on the last point made earlier, this would ultimately impact how reference
types compare or equate to one another. Let us use the following example.
*/

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
};

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
};

console.log(userOne == userTwo); // false

/*
Now you are probably why would this equate to false. Well the answer is simple, they are
not the same so to speak. This is from the fact that the 'references' are not the same. 
These two arrays point to two different locations in memory, even though their values 
are the same, they are not strictly equal. 

However, two reference types are equal if their underlying object are equal. Let us use 
an example.
*/

let nums1 = [1, 2, 3];
let numbers1 = nums;

console.log(nums == numbers);  // true

let userOne1 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
};

let userTwo1 = userOne1

console.log(userOne1 == userTwo1); // true