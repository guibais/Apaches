import React from "react";
import { NavLink, withRouter } from "react-router-dom";

export default function Navbar(props) {
  const match = x => (props.location.pathname === x ? "active" : "");
  return (
    <div className="main-menu-wrap sticky-menu">
      <div className="container">
        <a href="index-2.html" className="custom-logo-link">
          <img
            src="team/images/soccer/logo.png"
            alt="logo"
            className="custom-logo"
          />
        </a>
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#team-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <nav className="navbar">
          <div className="collapse navbar-collapse" id="team-menu">
            <ul className="main-menu nav">
              <li className={match("/")}>
                <NavLink exact to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li className={match("/news")}>
                <NavLink exact to="/news">
                  <span>Novidades</span>
                </NavLink>
              </li>
              <li>
                <a href="contacts.html">
                  <span>Contate-nos</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
Navbar = withRouter(Navbar);
