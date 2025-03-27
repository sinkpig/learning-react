export default function GameOver({ winner, onResetBoard }) {
  return (
    <div id="game-over">
      <h2>{winner ? "Congratulations" : "Game over"}</h2>
      <p>{winner ? `${winner} won!` : "It's a draw!"}</p>
      <button onClick={onResetBoard}>Rematch</button>
    </div>
  )
}
