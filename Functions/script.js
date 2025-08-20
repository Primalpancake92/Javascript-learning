function findArea(radius){
    const circleArea = Math.PI * Math.pow(radius, 2);

    return circleArea
}

function roundToDecimalPlace(area, decimalPlaces){
    const rounded = Math.round(area * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)

    return rounded
}

function main(){
    let areaText = document.getElementById("area")

    while (true){
        let input = prompt("Enter the radius of a circle (Enter -1 to exit): ")
        if (input == -1 || input == null){
            console.log("Done!")
            areaText.textContent = "null"
            break
        }

        const area = findArea(input)

        return areaText.textContent = roundToDecimalPlace(area, 2);
    }
}

main()

/*
Function arguments are pass by values which refers to how they are passed through to the functions.

For primitives a copy of the values are copied in the stack then used by the function, and this 
change is not reflected outside of the function itself.

For refernce or objects, meaning that the function only points to the object however it does not 
make changes to it in Javascript. It doesnt actually take in the actual values of that object. Thus,
the original object values are never changed.
*/