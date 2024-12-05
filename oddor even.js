function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  console.log(checkEvenOrOdd(4));
  console.log(checkEvenOrOdd(7));
  
  

  //sum of all even number
  function sumOfEvens(array) {
    return array
        .filter(num => num % 2 === 0) 
        .reduce((sum, num) => sum + num, 0); 
}


const numbers = [1, 2, 3, 4, 5, 6];
const sum = sumOfEvens(numbers);
console.log(sum); 




const divide = (a, b) => 
  { try { return b === 0 ? "Cannot divide by zero" : a / b; } finally {
       console.log("Operation complete"); } };
       console.log(divide(10, 2)); 
       console.log(divide(10, 0));