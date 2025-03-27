export default function GameOver({ winner, onResetBoard }) {
  return (
    <div id="game-over">
      <h2>Game over</h2>
      {winner ? <p>You won {winner}</p> : <p>It's a draw!</p>}
      <button onClick={onResetBoard}>Rematch</button>
    </div>
  )
}
