export default function Input({ title }) {
  function transformString(input) {
    return input
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div>
      <label htmlFor={title}>{transformString(title)}</label>
      <input type="number" id={title}/>
    </div>
  )
}
