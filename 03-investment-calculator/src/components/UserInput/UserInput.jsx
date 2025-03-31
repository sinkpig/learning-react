import Input from '../Input/Input'
import './UserInput.css'

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input title="initial-investment" />
        <Input title="annual-investment" />
      </div>
      <div className="input-group">
        <Input title="expected-return" />
        <Input title="duration" />
      </div>
    </section>
  )
}
