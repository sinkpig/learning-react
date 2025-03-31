import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment'
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput'
import Result from './components/Result/Result'

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, updatedValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: updatedValue
      }
    })
  }

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput title="initial-investment" userInput={userInput} onChange={handleChange} />
          <UserInput title="annual-investment" userInput={userInput} onChange={handleChange} />
        </div>
        <div className="input-group">
          <UserInput title="expected-return" userInput={userInput} onChange={handleChange} />
          <UserInput title="duration" userInput={userInput} onChange={handleChange} />
        </div>
      </section>
      <Result />
    </>
  )
}

export default App
