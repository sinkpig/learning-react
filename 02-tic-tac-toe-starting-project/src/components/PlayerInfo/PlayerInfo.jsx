import { useState } from 'react'

export default function PlayerInfo({ initialName, symbol }) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setEdit ] = useState(false)
  let elPlayerName = <span className="player-name">{playerName}</span>
  let buttonText = 'Edit'

  function toggleEditing() {
    setEdit(editing => !editing)
  }

  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  if (isEditing) {
    elPlayerName = <input type="text" value={playerName} onChange={handleChange} required />
    buttonText = "Save"
  }

  return (
    <li>
      <span className="player">
        {elPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditing}>{buttonText}</button>
    </li>
  )
}
