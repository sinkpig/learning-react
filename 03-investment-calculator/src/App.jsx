import { calculateInvestmentResults } from './util/investment'
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput'
import Result from './components/Result/Result'

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <Result />
    </>
  )
}

export default App
