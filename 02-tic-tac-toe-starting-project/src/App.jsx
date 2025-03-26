import { useState } from 'react'
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"

function App() {
  const firstSymbol = '🌝'
  const secondSymbol = '🌚'
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState(firstSymbol)

  function handleSetTile(rowIndex, columnIndex) {
    setActivePlayer((activeSymbol) => activeSymbol === firstSymbol ? secondSymbol : firstSymbol)
    setGameTurns(prevTurns => {
      let currentSymbol = firstSymbol
      if (prevTurns.length > 0 && prevTurns[0].symbol === firstSymbol) currentSymbol = secondSymbol

      const updatedTurns = [
        { tile: { row: rowIndex, column: columnIndex }, symbol: currentSymbol },
        ...prevTurns
      ]

      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName="Player 1"
            symbol={firstSymbol}
            isActive={activePlayer === firstSymbol}
          />
          <PlayerInfo
            initialName="Player 2"
            symbol={secondSymbol}
            isActive={activePlayer === secondSymbol}
          />
        </ol>
        <GameBoard
          onSetTile={handleSetTile}
          turns={gameTurns}
        />
      </div>
    </main>
  )
}

export default App
