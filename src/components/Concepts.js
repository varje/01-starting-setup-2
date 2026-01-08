function Concepts({concepts}) {
  return (
    <>
      <ul id="concepts">
        {concepts.map((concept) => (
          <li className="concept">
            <img src={concept.image} alt={concept.title} />
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Concepts;
