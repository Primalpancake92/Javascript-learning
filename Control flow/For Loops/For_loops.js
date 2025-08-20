// For loops are great for a finite number of iterations.

// This is a standard for loop
function forLoopIterator(namesArray){
    let n = namesArray.length
    let name = ""

    for (let i = 0; i < n; i ++){
        name += namesArray[i] + "\n"
    }

    return name
}

// This is the forEach way 
function forEachLoopIterator(namesArray){
    let converted = ""

    namesArray.forEach(name => {
        converted += name + "\n"
    })

    return converted
}

function main(){
    let names = []

    while (true){
        let name = prompt("Enter some names (enter 'enter' to exit): ")
        if (name === "enter"){
            break
        }
        names.push(name)
    }

    return forLoopIterator(names)
    return forEachLoopIterator(names)
}

console.log(main())