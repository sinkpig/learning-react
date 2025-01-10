import './CoreConcept.css'
import { CORE_CONCEPTS } from '../../data.js'

function CoreConceptEl({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function CoreConcept() {
  return (
    <>
      {CORE_CONCEPTS.map(({ image, title, description }) => (
        <CoreConceptEl image={image} title={title} description={description} />
      ))}
    </>
  )
}
