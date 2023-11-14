import React, {useState} from "react";
import classes from "./Form.module.css"

const Form = props => {

 const [currentSavings, setCurrentSavings]= useState("");
 const [yearlySavings, setYearlySavings] = useState("");
 const [expectedInterest, setExpectedInterest] = useState("");
 const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
    console.log(event.target.value)
  };

  const yearlySavingsHandler = event =>{
    setYearlySavings(event.target.value);
  };

  const expectedInterestHandler = event => {
    setExpectedInterest(event.target.value)
  };

  const investmentDurationHandler = event => {
    setInvestmentDuration(event.target.value)
  };

  const forumHandler = event => {
    event.preventDefault();

      const InputData = {
        CurrentSavings : currentSavings,
        YearlySavings : yearlySavings,
        ExpectedInterest : expectedInterest,
        InvestmentDuration : investmentDuration
      };
      props.onCalculate(InputData);
      
  };

  const resetButton = event =>{
    setCurrentSavings("")
    setYearlySavings("")
    setExpectedInterest("")
    setInvestmentDuration("")
  }

 

  return (

    
    <form className={classes.form} onSubmit={forumHandler}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={currentSavings} onChange={currentSavingsHandler} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value ={yearlySavings} onChange ={yearlySavingsHandler} id="yearly-contribution" />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={expectedInterest} onChange={expectedInterestHandler} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value= {investmentDuration} onChange={investmentDurationHandler} id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" onClick = {resetButton} className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
      )
};

export default Form;