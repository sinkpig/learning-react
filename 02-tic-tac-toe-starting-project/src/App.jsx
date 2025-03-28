import { useState } from 'react'
import { WINNING_COMBINATIONS } from "./data/winning_combinations"

import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"

const FIRST_SYMBOL = 'X'
const SECOND_SYMBOL = 'O'
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const PLAYERS = [
  { name: 'Player 1', symbol: FIRST_SYMBOL },
  { name: 'Player 2', symbol: SECOND_SYMBOL }
]

function deriveActivePlayer(gameTurns) {
  let currentSymbol = FIRST_SYMBOL
  if (gameTurns.length > 0 && gameTurns[0].symbol === FIRST_SYMBOL) currentSymbol = SECOND_SYMBOL
  return currentSymbol
}

function derivePlayerName(players, symbol) {
  return players.find((player) => player.symbol === symbol)?.name
}

function deriveWinner(gameBoard, players) {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstTileSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondTileSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdTileSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstTileSymbol && firstTileSymbol === secondTileSymbol && firstTileSymbol === thirdTileSymbol) {
      winner = derivePlayerName(players, firstTileSymbol)
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
      return prevPlayers.map(player =>
        player.symbol === symbol
          ? { ...player,
            name: updatedName }
          : player
      );
    });
  }

  function handleSetTile(rowIndex, columnIndex) {
    setGameTurns(prevTurns => {
      const currentSymbol = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        {
          tile: { row: rowIndex, column: columnIndex },
          symbol: currentSymbol,
          name: derivePlayerName(players, currentSymbol)
        },
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
            initialName={PLAYERS[0].name}
            symbol={PLAYERS[0].symbol}
            isActive={activePlayer === PLAYERS[0].symbol}
            onChangePlayerName={handleChangePlayerName}
          />
          <PlayerInfo
            initialName={PLAYERS[1].name}
            symbol={PLAYERS[1].symbol}
            isActive={activePlayer === PLAYERS[1].symbol}
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
