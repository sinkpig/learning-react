import { calculateInvestmentResults, formatter } from '../../util/investment'
import './Result.css'

export default function Result({ input }) {
  const results = calculateInvestmentResults(input)
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment
          const totalInvested = result.valueEndOfYear - totalInterest

          return (
            <tr key={result.year}>
              <td className="center">{result.year}</td>
              <td className="center">{formatter.format(result.interest)}</td>
              <td className="center">{formatter.format(result.valueEndOfYear)}</td>
              <td className="center">{formatter.format(totalInterest)}</td>
              <td className="center">{formatter.format(totalInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
