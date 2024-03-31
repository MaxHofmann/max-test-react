import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/albums">All albums</Link>
        <Link to="/posts">All posts</Link>
      </nav>
    </header>
  );
}

export default Header;