# Recursion

A process(function) that calls itself

Recurion essentials:
- **Base Case** - point where recursion stops
- different inputs for every iteration

**Usage:**
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algs
- Object traversal

## Call Stack

Any time function is invoked it is placed (**push**) on the top of the call stack  
When JS sees the `return` keyword or when the func. ends, the compiler will remove it (**pop**)

## Simple Recursion Examples

```js
const countDown = (num) => {
    if (num <= 0) {
        console.log('All done!');
        return;
    }

    console.log(num);
    num--;

    countDown(num);
}
```

```js
const sumRange = (num) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
```

```js
const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
```

## Recursion Pitfalls

- no Base Case
- forgetting to return or returning the wrong thing
- stack stack overflow

## Helper Method Recursion

**Collect all odd values in an array:**

```js
const collectOddValues = (arr) => {
    let res = []

    const helper = (helperInput) => {
        if (!helperInput.length) return

        if (helperInput[0] % 2 !== 0)
            res.push(helperInput[0])

        helper(helperInput.slice(1))
    }

    helper(arr)

    return res
}
```

## Pure Recursion

**Tips:**

- for arrays, user methods like *slice*, the *spread operator* and *concat* that makes copies of arrays so you do not mutate them
- strings are immutable so you will need to use methods like *slice*, *substr* or *substring* to make copies of strings
- to make copies of objects use *Object.assign* or the *spread operator*

**Collect all odd values in an array:**

```js
const collectOddValues = (arr) => {
    let newArr = []

    if (!arr.length) 
        return newArr

    if (arr[0] % 2 !== 0)
        newArr.push(arr[0])

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr
}
```