import { useState } from 'react'
import { WINNING_COMBINATIONS } from "./data/winning_combinations";

import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"

const firstSymbol = '🌝'
const secondSymbol = '🌚'
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentSymbol = firstSymbol
  if (gameTurns.length > 0 && gameTurns[0].symbol === firstSymbol) currentSymbol = secondSymbol
  return currentSymbol
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  let gameBoard = initialGameBoard
  let winner

  for (const turn of gameTurns) {
    const  { tile, symbol } = turn
    const { row, column } = tile

    gameBoard[row][column] = symbol
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstTileSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondTileSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdTileSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstTileSymbol && firstTileSymbol === secondTileSymbol && firstTileSymbol === thirdTileSymbol) {
      winner = firstTileSymbol
    }
  }

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
        {winner ? <p>Congratulations, {winner} won!</p> : (
          <GameBoard
          onSetTile={handleSetTile}
          board={gameBoard}
        />
        )}
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
