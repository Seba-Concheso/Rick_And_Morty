import React from "react";
import SearchBar from "./Barra_Busqueda/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <SearchBar onSearch={this.props.onSearch} />
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <Link to="/about">
          <button>About</button>
        </Link>

      </nav>
    );
  }
}
export default Nav;
