import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import { EXAMPLES } from './data.js'

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState()
  let tabContent = <p>Select a topic to learn more.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  function selectHandler(topic) {
    setSelectedTopic(topic)
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
            <TabButton onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
