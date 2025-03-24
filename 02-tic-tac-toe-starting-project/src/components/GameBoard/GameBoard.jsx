import { useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSetSymbol, playerSymbol }) {
  const [ gameBoard, setGameBoard ] = useState(initialGameBoard)

  function handleSetSymbol(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
      updatedGameBoard[rowIndex][colIndex] = playerSymbol
      return updatedGameBoard
    })
    onSetSymbol()
  }

  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((symbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleSetSymbol(rowIndex, colIndex)}>{symbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
}
