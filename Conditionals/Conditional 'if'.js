/*
Conditions are statements that control the flow of a program. One example of this is 
the 'if' condition. This means if a condition is satisfied then a code block may be 
executed.
*/

let someAge = Number(prompt("What is your age this year John? "));


/*A function that takes age as an input and uses a conditional to evaluate the answer.*/
function correctAge(age){
    if (age == 25){
        window.alert("Ding Ding Ding Ding. You are right!"); // correct then alert this
        console.log("Ding Ding Ding Ding. You are right!")
    }
}

correctAge(someAge); // Calls out function with someAge as the argument.