import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
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