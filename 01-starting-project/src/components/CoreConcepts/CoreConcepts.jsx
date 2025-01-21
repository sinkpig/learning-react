import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../../data.js'

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts: Time to get started!</h2>
      <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} {...concept} />
      ))}
      </ul>
    </section>
  )
}
