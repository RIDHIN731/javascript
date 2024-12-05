function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.max(...numbers);
}
const array = [3, 56, 12, 89, 23];
const largest = findLargestNumber(array);
console.log(`The largest number is: ${largest}`);



function roundToNearestInteger(number) {
    return Math.round(number);
}

console.log(roundToNearestInteger(4.5)); 
console.log(roundToNearestInteger(4.4)); 
console.log(roundToNearestInteger(-3.6)); 
console.log(roundToNearestInteger(-3.2));




//decimal
function roundToNearestInteger(decimalNumber) {
    return Math.round(decimalNumber);
}

// Example usage:
console.log(roundToNearestInteger(4.5)); 
console.log(roundToNearestInteger(2.3)); 
console.log(roundToNearestInteger(-1.8)); 
