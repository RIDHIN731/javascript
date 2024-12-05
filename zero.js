const divide = (a, b) => 
    { try { return b === 0 ? "Cannot divide by zero" : a / b; } finally {
         console.log("Operation complete"); } };
         console.log(divide(10, 2)); 
         console.log(divide(10, 0));
         