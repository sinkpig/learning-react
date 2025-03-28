import { useState } from 'react'
import { WINNING_COMBINATIONS } from "./data/winning_combinations";

import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"

const FIRST_SYMBOL = '🌝'
const SECOND_SYMBOL = '🌚'
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const PLAYERS = {
  [FIRST_SYMBOL]: 'Player 1',
  [SECOND_SYMBOL]: 'Player 2'
}

function deriveActivePlayer(gameTurns) {
  let currentSymbol = FIRST_SYMBOL
  if (gameTurns.length > 0 && gameTurns[0].symbol === FIRST_SYMBOL) currentSymbol = SECOND_SYMBOL
  return currentSymbol
}

function deriveWinner(gameBoard, players) {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstTileSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondTileSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdTileSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstTileSymbol && firstTileSymbol === secondTileSymbol && firstTileSymbol === thirdTileSymbol) {
      winner = players[firstTileSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

  for (const turn of gameTurns) {
    const  { tile, symbol } = turn
    const { row, column } = tile

    gameBoard[row][column] = symbol
  }

  return gameBoard
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const isDraw = gameTurns.length === 9 && !winner

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
            initialName={PLAYERS[FIRST_SYMBOL]}
            symbol={FIRST_SYMBOL}
            isActive={activePlayer === FIRST_SYMBOL}
            onChangePlayerName={handleChangePlayerName}
          />
          <PlayerInfo
            initialName={PLAYERS[SECOND_SYMBOL]}
            symbol={SECOND_SYMBOL}
            isActive={activePlayer === SECOND_SYMBOL}
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
