const numbers = [12, 98, 5, 41, 23, 78, 46];

// Function to get even numbers from an array
function getEvenNumbers(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

// Get even numbers from the numbers array
const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers);