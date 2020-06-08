const sameFrequency = (num1 = 0, num2 = 0) => {
    const num1String = num1.toString()
    const num2String = num2.toString()

    if (num1String.length !== num2String.length) 
        return false

    const num1Map = {}
    for (const char of num1String) {
        num1Map[char] = num1Map[char] ? ++num1Map[char] : 1
    }

    for (const char of num2String) {
        if(!num1Map[char])
            return false
        
        --num1Map[char]
    }

    return true
}

const areThereDuplicates = (...inputs) => {
    const inputsMap = {}

    for (const arg of inputs) {
        if (inputsMap[arg])
            return true

        inputsMap[arg] = 1
    }

    return false
}