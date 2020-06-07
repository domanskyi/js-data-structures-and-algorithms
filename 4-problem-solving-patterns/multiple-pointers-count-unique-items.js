const countUniqueValues = (arr = []) => {
    if (!arr.length)
        return 0

    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[pointer]) {
            ++pointer
            arr[pointer] = arr[i]
        }
        
    }

    return ++pointer
}

console.log(
    countUniqueValues([1,1,2])
)