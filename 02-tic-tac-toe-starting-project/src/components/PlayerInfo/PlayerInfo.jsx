import { useState } from 'react'

export default function PlayerInfo({ initialName, symbol, isActive, onChangePlayerName }) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setEdit ] = useState(false)
  let elPlayerName = <span className="player-name">{playerName}</span>
  let buttonText = 'Edit'

  function toggleEditing() {
    setEdit(editing => !editing)

    if (isEditing) onChangePlayerName(symbol, playerName)
  }

  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  if (isEditing) {
    elPlayerName = <input type="text" value={playerName} onChange={handleChange} required />
    buttonText = "Save"
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {elPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditing}>{buttonText}</button>
    </li>
  )
}
