import { NavLink } from "react-router-dom";
import logo from "../images/header-logo.png";

export default function Header() {
  return (
    <header>
      <div className="title">
        <img src={logo} alt="blog logo" />
        <h1>My learning journal</h1>
      </div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
      </nav>
    </header>
  );
}
