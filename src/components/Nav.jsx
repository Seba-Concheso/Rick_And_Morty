import React from "react";
import SearchBar from "./Barra_Busqueda/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className={Styles.conteiner}>
        <div className={Styles.leftButton}>
          <NavLink to="/home">
            <button className={Styles.Button}>Home</button>
          </NavLink>
          <Link to="/about">
            <button className={Styles.Button}>About</button>
          </Link>
        </div>
        <Link to="/">
          <button className={Styles.rightButton}>Logout</button>
        </Link>
        <Link to="/favorites">
          <button className={Styles.Button}>Favorites</button>
        </Link>
        <div className={Styles.search}>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </nav>
    );
  }
}
export default Nav;
