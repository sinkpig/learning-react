import { useState } from 'react'
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"

function App() {
  const firstSymbol = 'X'
  const secondSymbol = 'O'
  const [activePlayer, setActivePlayer] = useState(firstSymbol)

  function handleSetSymbol() {
    setActivePlayer((symbol) => symbol === firstSymbol ? secondSymbol : firstSymbol)
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialName="Player 1" symbol={firstSymbol} isActive={activePlayer === firstSymbol}/>
          <PlayerInfo initialName="Player 2" symbol={secondSymbol} isActive={activePlayer === secondSymbol}/>
        </ol>

        <GameBoard onSetSymbol={handleSetSymbol} playerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
