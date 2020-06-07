# Problem Solving Patterns

## Frequency Counter
This pattern uses objects or sets to collect values/frequincies of values.  
This can often avoid the need of nested loops or `O(N^2)` operations with arrays/strings.  

```js
// Finding anagrams using Frequency Counters: 
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
```

## Multiple Pointers
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.  
Very efficient for solving problems with minimal space complexity as well.

```js
// Counting uniq sorted array values using Multiple Pointers
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
```