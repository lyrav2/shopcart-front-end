import React from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";
import logo from "../assets/img/logo.png"
const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"><a href="/" className="logo"><img className="logo" src={logo} alt=""/></a></NavLink>
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
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;