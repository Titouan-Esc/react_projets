import "./App.css";
// ! Importation de ma Nav Bar
import NavBar from "./components/NavBar";
// ! Importation pour le Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ! Importation de mes pages en js
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

// ! Creation d'une variable pour nos routes au lieu de les appler une par une
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/projets", name: "Projets", Component: Projets },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  // ? Déclaration d'une constante pour le useState qui modiferie la data

  return (
    // !Appel de la balise Route
    <Router>
      <main>
        <NavBar />
        <Switch>
          {/* On appel notre const avec le point map pour faire une boucle puis y passer les arguments path et component */}
          {routes.map(({ path, Component }) => (
            // ! Creation de la balise Route puis de la key qui a le path et le path qui est égale à path
            <Route key={path} exact path={path}>
              {/* Appel d'une fonction fléché qui a pour argument match */}
              {() => (
                <>
                  <Component />
                </>
              )}
            </Route>
          ))}
        </Switch>
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
