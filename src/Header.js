import React from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header position-sticky bg-black border-bottom border-primary">
      <div className="container-fluid">
        <nav
          className="navbar main-nav navbar-expand-lg navbar-dark"
          aria-label="Main navigation"
        >
          <Link to="/" className="nav-link">
            <div className="mx-0.3 ">
              <PersonRoundedIcon color="secondary" fontSize="large" />{" "}
            </div>
          </Link>

          <Link to="/" className="nav-link">
            <h1 className="navbar-brand d-inline-flex text-uppercase">
              Devendra Rasmeriya
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-uppercase"
            id="navbarContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link">
                  Skills & Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
