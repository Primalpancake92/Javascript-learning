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