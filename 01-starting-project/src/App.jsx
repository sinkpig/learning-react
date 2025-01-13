import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx'

function App() {
  function selectHandler() {
    console.log('clicked')
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={selectHandler}>Components</TabButton>
            <TabButton onSelect={selectHandler}>JSX</TabButton>
            <TabButton onSelect={selectHandler}>Props</TabButton>
            <TabButton onSelect={selectHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}
export default App;
