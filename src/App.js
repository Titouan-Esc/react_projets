import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./components/List";

function App() {
  const [student, setStudent] = useState(data);

  return (
    <main>
      <div className="button">
        <button onClick={() => setStudent([])}>Clique</button>
      </div>
      <section className="container">
        <h2>Attendance list for {student.length} students</h2>
        <List student={student} />
      </section>
      <div className="button">
        <button onClick={() => setStudent([])}>Clear list</button>
      </div>
    </main>
  );
}

export default App;
