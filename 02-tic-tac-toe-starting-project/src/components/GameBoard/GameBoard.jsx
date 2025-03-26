const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSetTile, turns }) {
  let gameBoard = initialGameBoard

  for (const turn of turns) {
    const  { tile, symbol } = turn
    const { row, column } = tile

    gameBoard[row][column] = symbol
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSetTile(rowIndex, columnIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
