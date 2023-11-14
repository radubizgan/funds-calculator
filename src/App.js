import { useState } from "react";
import Form from './components/Imput/Form';
import TableResults from './components/Output/TableResults';
import logo from "./assets/investment-calculator-logo.png"


function App() {
 const [userInput, setUserInput] = useState(null)
 
  const calculateHandler = (userInput) => {
    setUserInput(userInput)}

    const yearlyData = []; 

    if (userInput) {
    let currentSavings = +userInput['CurrentSavings']; 
    const yearlyContribution = +userInput['YearlySavings'];
    const expectedReturn = +userInput['ExpectedInterest'] / 100;
    const duration = +userInput['InvestmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }}
    
  return (
    <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h1>Investment Calculator</h1>
        </header>
       <Form onCalculate={calculateHandler}/> 
       
        <TableResults data={yearlyData} initialInvestment={userInput}/>
    </div>
  );
};

export default App;