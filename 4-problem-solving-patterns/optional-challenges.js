const sameFrequency = (num1 = 0, num2 = 0) => {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) return false;

  const num1Map = {};
  for (const char of num1String) {
    num1Map[char] = num1Map[char] ? ++num1Map[char] : 1;
  }

  for (const char of num2String) {
    if (!num1Map[char]) return false;

    --num1Map[char];
  }

  return true;
};

const areThereDuplicates = (...inputs) => {
  const inputsMap = {};

  for (const arg of inputs) {
    if (inputsMap[arg]) return true;

    inputsMap[arg] = 1;
  }

  return false;
};

const averagePair = (arr = [], avg = 0) => {
  if (avg > arr.length) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const pairAvg = (arr[left] + arr[right]) / 2;

    if (pairAvg === avg) return true;

    if (pairAvg > avg) right--;

    if (pairAvg < avg) left++;
  }

  return false;
};

const isSubsequence = (str1 = "", str2 = "") => {
  let pointer = 0;

  for (const char of str2) {
    if (char === str1[pointer]) pointer++;

    if (pointer === str1.length) return true;
  }

  return false;
};

const maxSubarraySum = (arr = [], window = 0) => {
  let max = 0;

  if (window > arr.length) return null;

  for (let i = 0; i < window; i++) {
    max += arr[i];
  }

  let tempMax = max;
  for (let i = window; i < arr.length; i++) {
    tempMax += arr[i] - arr[i - window];

    if (tempMax > max) max = tempMax;
  }

  return max;
};
