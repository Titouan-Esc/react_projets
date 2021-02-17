const List = ({ student }) => {
  return (
    <>
      {student.map((eleve) => {
        const { id, name, attendance } = eleve;
        // ? affichage d'un seul élève/élément avec le return à l'intérieur
        return (
          <article className="students" key={id}>
            <div>
              <h4>{name}</h4>
              <p>{attendance ? "résent" : "Absent"}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
