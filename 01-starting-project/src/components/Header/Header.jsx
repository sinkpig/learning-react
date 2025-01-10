import './Header.css'
import iconImage from '../../assets/react-core-concepts.png'

const listDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const description = listDescriptions[genRandomInt(listDescriptions.length - 1)]
  return (
    <header>
      <img src={iconImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
