import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx'
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
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}
export default App;
