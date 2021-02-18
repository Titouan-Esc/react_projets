// ! Importation de useState pour pouvoir modifier le contenu que je souhaite
import React, { useState } from "react";
import "./App.css";
// ! Importation de mes données pour ma boucle
import data from "./data";
// ! Importation de ma Nav Bar
import NavBar from "./components/NavBar";
// ! Importation de mon component Person
import Person from "./components/Person";
// ! Importation de mon component Body
import Body from "./components/Body";
// ! Importation pour le Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ! Importation de mes pages en js
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

function App() {
  // ? Déclaration d'une constante pour le useState qui modiferie la data
  const [anonyme, setAnonyme] = useState(data);
  return (
    // !Appel de la balise Route
    <Router>
      <main>
        <NavBar />
        {/* Appel de la balise Switch donc ce qui va changer */}
        <Switch>
          {/* Appel de la balise Route ou je vais faire le lien avec ma page js */}
          <Route path="/" component={Home}>
            <div className="bas">
              {/* Appel de ma constante */}
              <Person anonyme={anonyme} />
            </div>
          </Route>
          <Route path="/projets" component={Projets} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Body />
      </main>
    </Router>
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
