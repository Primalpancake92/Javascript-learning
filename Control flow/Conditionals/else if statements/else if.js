/*
This program highlights how if, else if, else condtiions dictate program flow 
during runtime. The first function takes 'someAge' that produces varying 
outputs depending on the age a user types in the prompt. 

Breaking down this function further, a general rule of thumb is to always 
put ur invalid condition first, then the valid conditions of different 
outcomes after. 

The reason you check for invalidity, as it ensures all issues are caught
first (fail fast), and input logic is handled prior proceeding to further
checks.
*/

function legalOrNot(someAge){
    if(someAge > 100 || someAge < 0){
        window.alert("This is an invalid age.");
        return;
    }
    else if (someAge >= 18){
        window.alert("You are legally allowed to drink! You are an adult.");
    }
    else{
        window.alert("You are not legally allowed to drink. You are a minor.");
    }
}

function legality(someAge){
    someAge >= 18 ? window.alert("You are legal") : window.alert("You are a minor"); // This is through ternay operators
}

function main(){
    let age = Number(prompt("What is your age? "));
    legality(age);
    legalOrNot(age);
}

main(); 

