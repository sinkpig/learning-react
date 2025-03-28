export default function Log({ turns }) {
  let content = <li>No turns yet!</li>

  if (turns.length > 0) {
    content = turns.map((turn) => (
      <li key={`${turn.tile.row}${turn.tile.column}`}>
        <b>{turn.name}</b> placed <b>{turn.symbol}</b> on row {turn.tile.row} column {turn.tile.column}
      </li>
    ));
  }

  return <ol id="log">{content}</ol>;
}
