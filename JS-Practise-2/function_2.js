// Practise Tasks----5
function odd_even(num) {
  if (num % 2 === 0) {
      return 'Even'; // If the number is divisible by 2, it's even
  } else {
      return 'Odd'; // Otherwise, it's odd
  }
}

// Example usage:
const result1 = odd_even(7); // Should return "Odd"
const result2 = odd_even(10); // Should return "Even"

console.log(result1); // Output: Odd
console.log(result2); // Output: Even
