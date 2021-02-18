// ! imporation de Link pour le lien
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* Appel de la balise link pour marquer l'endroit ou quand je vais appuyer dessus le lien va se faire */}
      <Link to="#">
        <a href="">
          <img
            src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Un putain de chien trop mignon"
          />
        </a>
      </Link>
      <div>
        <a href="Person.jsx">Projets</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
