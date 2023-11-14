import classes from "./TableResults.module.css"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});



const TableResults = (props) => {
  if (props.data.length === 0) {
    return  <p className={classes.error}>No investment calculated yet</p>
  } 
  
  return (
    <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearlyData) => (
            <tr key={yearlyData.year}>
            <th>{yearlyData.year}</th>
            <th>{formatter.format(yearlyData.savingsEndOfYear)}</th>
            <th>{formatter.format(yearlyData.yearlyInterest)}</th>
            <th>{formatter.format(yearlyData.savingsEndOfYear - props.initialInvestment['CurrentSavings'] - yearlyData.yearlyContribution * yearlyData.year)}</th>
            <th>{formatter.format(props.initialInvestment['CurrentSavings'] + yearlyData.yearlyContribution * yearlyData.year)}</th>
          </tr>
          ))}
        </tbody>
      </table>
      )
};

export default TableResults;