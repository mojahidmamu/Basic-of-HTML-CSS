const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Function to reverse the array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Reverse the colors array
const reversedColors = reverseArray(colors);

console.log(reversedColors);