var names = ['Tom', 'Tim', 'Tin', 'Tik'];

// Function to concatenate array elements into a single string
function concatenateArray(arr) {
    let result = '';
    for (let name of arr) {
        result += name;
    }
    return result;
}

// Concatenate the elements of the names array
var concatenatedString = concatenateArray(names);

console.log(concatenatedString);
