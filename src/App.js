import React, { useState } from "react";
import "./App.css";
import data from "./data";
import NavBar from "./components/NavBar";
import Person from "./components/Person";
import Body from "./components/Body";

function App() {
  const [anonyme, setAnonyme] = useState(data);
  return (
    <main>
      <NavBar />
      <div className="bas">
        <Person anonyme={anonyme} />
      </div>
      <Body />
    </main>
  );
}

export default App;

// const [student, setStudent] = useState(data);
/* <section className="container">
        <div className="button">
          <button onClick={() => setStudent([])}>Clique</button>
        </div>
        <div className="nom_des_eleves">
          <h2>Attendance list for {student.length} students</h2>
          <List student={student} />
        </div>
        <div className="button">
          <button onClick={() => setStudent([])}>Clear list</button>
        </div>
      </section> */
