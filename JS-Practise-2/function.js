/**
 * This is module practise tasks
 * 
 */
// Practise Tasks--1
function multiplyFourNumbers(a, b, c, d) {
  return a * b * c * d;
}

// Example usage:
const result = multiplyFourNumbers(2, 3, 4, 5);
console.log(result); // Output: 

//  Practise Tasks--2
function processNumber(num) {
  if (num % 2 === 0) {
      // Number is even
      return num / 2;
  } else {
      // Number is odd
      return num * 2;
  }
}

// Example usage:
const result1 = processNumber(5); // Odd number, should return 10
const result2 = processNumber(8); // Even number, should return 4

console.log(result1); // Output: 10
console.log(result2); // Output: 4


// Practise Tasks--3
function make_avg(arr, size) {
  // Check if the size is valid
  if (size === 0) return 0; 

  // Calculate the sum of the array elements
  let sum = 0;
  for (let i = 0; i < size; i++) {
      sum += arr[i];
  }

  // Return the average
  return sum / size;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;
const average = make_avg(numbers, size);

console.log(average); // Output: 30


// Practise Tasks---4
function count_zero(binaryString) {
  let zeroCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === '0') {
          zeroCount++;  // Increment the count if the character is '0'
      }
  }

  return zeroCount;
}

// Example usage:
const binaryString = "1010010100";
const zeroCount = count_zero(binaryString);

console.log(zeroCount); // Output: 6


