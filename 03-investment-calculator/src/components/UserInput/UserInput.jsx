import './UserInput.css'

export default function UserInput({ title, onChange, userInput }) {
  function toCapitalize(input) {
    return input
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function toCamelCase(input) {
    return input
      .split('-')
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  }

  return (
    <div>
      <label htmlFor={title}>{toCapitalize(title)}</label>
      <input
        type="number"
        value={userInput[toCamelCase(title)]}
        onChange={(e) => onChange(toCamelCase(title), e.target.value)}
        required />
    </div>
  )
}
