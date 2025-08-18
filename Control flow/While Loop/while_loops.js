// while loops are a type of iterative that is suitable for an unknown number of times or until the condition is false.

// Let us begin with an example

function iterator(nameArray){
    let names = ""

    let i = 0
    let n = nameArray.length
    while (i < n) {
        names += nameArray[i] + "\n"
        i++
    }

    return names
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

    return iterator(names)
}

console.log(main())