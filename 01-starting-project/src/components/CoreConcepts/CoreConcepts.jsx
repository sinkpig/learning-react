import CoreConcept from './CoreConcept.jsx'
import Section from '../Section.jsx'
import { CORE_CONCEPTS } from '../../data.js'

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts: Time to get started!">
      <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} {...concept} />
      ))}
      </ul>
    </Section>
  )
}
