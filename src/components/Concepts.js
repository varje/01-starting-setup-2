import Concept from './Concept';

function Concepts({ concepts }) {
  return (
    <>
      <ul id="concepts">
        {concepts.map((concept) => (
          <Concept concept={concept} />
        ))}
      </ul>
    </>
  );
}

export default Concepts;
