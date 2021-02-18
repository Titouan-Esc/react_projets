const Person = ({ anonyme }) => {
  return (
    <>
      {anonyme.map((personne) => {
        const { id, name, description } = personne;
        return (
          <div className="personnage" key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Person;
