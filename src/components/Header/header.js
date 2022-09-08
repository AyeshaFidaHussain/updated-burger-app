import { Link } from "react-router-dom";

import burgerlogo from "../../assets/burgerlogo.png";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-img-bg">
        <img src={burgerlogo} alt="Buger logo " className="logo-img" />
      </div>

      <div className="hrefs">
        <Link to="/">Burger Builder</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
