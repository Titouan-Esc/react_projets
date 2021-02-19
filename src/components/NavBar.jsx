// ! imporation de Link pour le lien
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* Appel de la balise link pour marquer l'endroit ou quand je vais appuyer dessus le lien va se faire */}
      <NavLink to="/">
        <img
          src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Un putain de chien trop mignon"
        />
      </NavLink>
      <div>
        <NavLink to="/projets" activeClassName="selected">
          <p>Projets</p>
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
