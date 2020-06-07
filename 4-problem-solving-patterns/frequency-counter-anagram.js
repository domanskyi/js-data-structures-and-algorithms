const validAnagram = (str1 = '', str2 = '') => {
    if (str1.length !== str2.length) 
        return false

    const map = {}

    for (const char of str1) 
        map[char] = map[char] ? ++map[char] : 1

    for (const char of str2) {
        if(!map[char]) 
            return false
        map[char]--
    }

    return true
}

console.log(
    validAnagram('aaz', 'zza') // false
)
console.log(
    validAnagram('anagram', 'nagaram') // true
)
console.log(
    validAnagram('rat', 'car') // false
)
console.log(
    validAnagram('awesome', 'awesom') // false
)
console.log(
    validAnagram('qwerty', 'qeywrt') // true
)
console.log(
    validAnagram('texttwisttime', 'timetwisttext') // true
)