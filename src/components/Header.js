import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [show, setShow] = useState();

  const showModal = (e) => {
      setShow(!show);
  }

  return (
    <header>
      <div className="container-fluid">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <a href="/" className="logo">
                  <img className="logo" src={logo} alt="" />
                </a>
              </NavLink>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <div className="register-button">
              <button
              className="toggle-button"
                onClick={(e) => {
                  show ? setShow(false) : setShow(true);
                }}
              >
                Register
              </button>
          </div>
          </ul>
        </nav>
        <div className="register-modal">
        <RegisterModal show={show} onClose={showModal} />
        </div>
      </div>
    </header>
  );
};

export default Header;
