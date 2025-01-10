import iconImage from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data.js'

const listDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
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

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function ConceptsIteration() {
  return (
    <>
      {CORE_CONCEPTS.map(({ image, title, description }) => (
        <CoreConcept image={image} title={title} description={description} />
      ))}
    </>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <ConceptsIteration/>
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
