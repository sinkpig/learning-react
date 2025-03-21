import { useState } from 'react'

import { EXAMPLES } from '../../data.js'
import Section from '../Section.jsx'
import TabButton from './TabButton.jsx'
import Tabs from '../Tabs/Tabs.jsx'

import './Examples.css'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()
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
    <Section id="examples" title="Examples">
      <Tabs buttons={
        <>
          <TabButton
            isActive={selectedTopic === 'components'}
            onClick={() => selectHandler('components')}
          >
            Components
          </TabButton>
          <TabButton
            isActive={selectedTopic === 'jsx'}
            onClick={() => selectHandler('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isActive={selectedTopic === 'props'}
            onClick={() => selectHandler('props')}
          >
            Props
          </TabButton>
          <TabButton
            isActive={selectedTopic === 'state'}
            onClick={() => selectHandler('state')}
          >
            State
          </TabButton>
        </>
      }>{tabContent}</Tabs>
    </Section>
  )
}
