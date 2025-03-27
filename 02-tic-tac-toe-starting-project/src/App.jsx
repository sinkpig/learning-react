import { useState } from 'react'
import { WINNING_COMBINATIONS } from "./data/winning_combinations";

import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"

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
  const [players, setPlayers] = useState({
    [firstSymbol]: 'Player 1',
    [secondSymbol]: 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  let gameBoard = [...initialGameBoard.map(array => [...array])]
  let winner
  const isDraw = gameTurns.length === 9 && !winner

  for (const turn of gameTurns) {
    const  { tile, symbol } = turn
    const { row, column } = tile

    gameBoard[row][column] = symbol
  }

  function handleChangePlayerName(symbol, updatedName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: updatedName
      }
    })
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

  function handleResetBoard() {
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName="Player 1"
            symbol={firstSymbol}
            isActive={activePlayer === firstSymbol}
            onChangePlayerName={handleChangePlayerName}
          />
          <PlayerInfo
            initialName="Player 2"
            symbol={secondSymbol}
            isActive={activePlayer === secondSymbol}
            onChangePlayerName={handleChangePlayerName}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onResetBoard={handleResetBoard}/>}
        <GameBoard
          onSetTile={handleSetTile}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
