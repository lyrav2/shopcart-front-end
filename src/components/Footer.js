import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;