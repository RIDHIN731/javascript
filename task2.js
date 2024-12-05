function isFutureDate(date) {
    const inputDate = new Date(date);
    const currentDate = new Date();
    return inputDate > currentDate;
}
let arr=['6','4','6','2','3',];

function removeduplicates(arr) {
    return arr.filter((item,index)=> arr. indexof (item)===index);
}
console.log(removeduplicates(arr)); 



//number of date

function calculateDaysBetweenDates(date1, date2) {
  
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    
    const timeDifference = Math.abs(endDate - startDate);


    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}


const daysBetween = calculateDaysBetweenDates('2024-12-01', '2024-12-04');
console.log(`Number of days: ${daysBetween}`); 


//all even number

function sumOfEvenNumbers(arr) {
    return arr
      .filter(num => num % 2 === 0) 
      .reduce((sum, num) => sum + num, 0); 
  }
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumOfEvenNumbers(numbers)); 
  