// while loops are a type of iterative that is suitable for an unknown number of times or until the condition is false.

// Let us begin with an example

function iterator(nameArray){
    names = ""

    i = 0
    n = nameArray.length
    while (i < n){
        names += nameArray[i] + "\n"
    }

    return names
}

function main(){
    names = []

    while (true){
        name = String(prompt("Enter some names (enter 'enter' to exit): "))
        if (names == "enter"){
            break
        }
        names.push(name)
    }
    console.log(iterator(names))
}