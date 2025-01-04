# Analyzing Performance of Arrays and Objects

## Objects

**Big O:**

- insertion - `O(1)`
- removal - `O(1)`
- searching - `O(n)` - for searching we need to map throught all values to find searched data
- access - `O(1)`

**Methods:**

- `Object.keys()` - `O(n)` - to get list of keys it visits every key in object
- `Object.values()` - `O(n)`
- `Object.entries()` - `O(n)`
- `hasOwnProperty` - `O(1)`

## Arrays

**Big O:**

- insertion - `it depends`
- removal - `it depends`
- searching - `O(n)`
- access - `O(1)`

**Methods:**

- push - `O(1)`
- pop - `O(1)`
- shift - `O(n)`
- unshift - `O(n)`
- concat - `O(n)`
- slice - `O(n)`
- splice - `O(n)`
- sort - `O(n \* log N)`
- forEach / map / filter/ reduce / etc. - `O(n)`
