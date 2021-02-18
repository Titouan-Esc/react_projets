import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./components/List";
import NavBar from "./components/NavBar";

function App() {
  const [student, setStudent] = useState(data);

  return (
    <main>
      <NavBar />
      <section className="container">
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
      </section>
    </main>
  );
}

export default App;
