import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends Component {
  render = () => (
    <header>
      <Link to={"/"}>
        <nav className="header-el">Home</nav>
      </Link>
      <Link to={"/login"}>
        <nav className="header-el">Login</nav>
      </Link>
      <Link to={"/sign-up"}>
        <nav className="header-el">SignUp</nav>
      </Link>
      <Link to={"/items"}>
        <nav className="header-el">Items</nav>
      </Link>
    </header>
  );
}

export default Header;
