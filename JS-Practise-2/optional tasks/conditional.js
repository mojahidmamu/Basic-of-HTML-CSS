function calculateTicketFare(age, isStudent) {
  const regularFare = 800;

  if (age < 10) {
      return 0; // Children get a free ticket
  } else if (isStudent) {
      return regularFare * 0.5; // Students get a 50% discount
  } else if (age >= 60) {
      return regularFare * 0.85; // Senior citizens get a 15% discount
  } else {
      return regularFare; // Regular ticket fare
  }
}let num1 = 10; // Example value
let num2 = 5;  // Example value
let result;

if (num1 > num2) {
    result = num1 * 2; // Double of num1 if num1 is bigger
} else {
    result = num1 + num2; // Sum of num1 and num2 otherwise
}

console.log(result);


// Example usage
console.log(calculateTicketFare(5, false));    // Output: 0 (Child)
console.log(calculateTicketFare(15, true));    // Output: 400 (Student)
console.log(calculateTicketFare(65, false));   // Output: 680 (Senior citizen)
console.log(calculateTicketFare(45, false));   // Output: 800 (Regular fare)