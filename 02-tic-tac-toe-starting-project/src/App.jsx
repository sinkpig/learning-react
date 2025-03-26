import { useState } from 'react'
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"

const firstSymbol = '🌝'
const secondSymbol = '🌚'

function deriveActivePlayer(gameTurns) {
  let currentSymbol = firstSymbol
  if (gameTurns.length > 0 && gameTurns[0].symbol === firstSymbol) currentSymbol = secondSymbol
  return currentSymbol
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSetTile(rowIndex, columnIndex) {
    setGameTurns(prevTurns => {
      const currentSymbol = deriveActivePlayer(prevTurns)

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
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
