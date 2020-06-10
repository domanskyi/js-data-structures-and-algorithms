const power = (num, base) => {
  if (base === 0) return 1;
  return num * power(num, base - 1);
};

const factorial = (num) => {
  if (num === 1 || !num) return 1;
  return num * factorial(num - 1);
};

const productOfArray = (arr = []) => {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

const recursiveRange = (num) => {
  if (!num) return 0;
  return num + recursiveRange(num - 1);
};

const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

// HARDER CHALLENGES
const reverse = (str = "") => {
  if (!str.length) return "";
  return str[str.length - 1] + reverse(str.slice(0, -1));
};

const isPalindrome = (str = "") => {
  if (!str.length) return true;
  return (
    true &&
    str[0] === str[str.length - 1] &&
    isPalindrome(str.slice(1).slice(0, -1))
  );
};

const someRecursive = (arr = [], call) => {
  if (!arr.length) return false;
  if (call(arr[0])) return true;
  return someRecursive(arr.slice(1), call);
};
