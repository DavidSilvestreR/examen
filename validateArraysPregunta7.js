function balancedOrNot(expressions, maxReplacements) {
    let validations=expressions.map((currentvalue, index, array) => {
        let expresion = new RegExp("<>", "g"), cloneArray = currentvalue.toString();
        cloneArray.replace(expresion, "")
        let validate = true, counter = 0, internalArray = [cloneArray];
        while (validate == true) {
            internalArray[counter + 1] = internalArray[counter].replace(expresion, "")
            if (internalArray[counter] === internalArray[counter + 1]) {
                break
            }
            counter++
        }
        let secondexpresion = new RegExp("<", "g")
        let lastString = internalArray.slice(-1)[0]
        let ultimateString = lastString.replace(secondexpresion, "")
        let compareArray = lastString.replace(new RegExp(">", "g"), "")
        if (ultimateString.split("").length <= maxReplacements[index] && [...compareArray].length == 0) {
            return 1
        } else {
            return 0
        }
    })
    return validations
}
let a = balancedOrNot(["<<<>>>>><<<<<<>", "<>><>><<<<<<<","<><>>><<<>","<><>"], [5,3,5,1])
console.log(a)