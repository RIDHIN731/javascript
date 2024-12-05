
function sumOfEvenNumbers(arr) {
    return arr
      .filter(num => num % 2 === 0) 
      .reduce((sum, num) => sum + num, 0); 
  }
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumOfEvenNumbers(numbers)); 
  