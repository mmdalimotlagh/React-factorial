import React, { useState, useEffect } from 'react';

function App() {
  const [factorialCalculated, setFactorialCalculated] = useState(false);

  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  useEffect(() => {
    if (!factorialCalculated) {
      const result = factorial(5); 
      alert(`Factorial of 20 is: ${result}`);
      setFactorialCalculated(true);
      console.log(factorial);
    }
  }, [factorialCalculated]);


}

export default App;
