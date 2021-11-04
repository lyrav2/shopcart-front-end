import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <h5>Get to Know Us</h5>
            <ul class="footer-links">
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Investor Relations</Link>
              </li>
              <li>
                <Link to="#">Press Releases</Link>
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h5>Contact Us</h5>
            <ul class="footer-links">
              <li>
                <Link to="#">Email</Link>
              </li>
              <li>
                <Link to="#">Live Chat</Link>
              </li>
              <li>
                <Link to="#">Customer Service Portal</Link>
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h5>Customer Support</h5>
            <ul class="footer-links">
              <li>
                <Link to="#">COVID-19 and ShopCart</Link>
              </li>
              <li>
                <Link to="#">Shipping & Handling</Link>
              </li>
              <li>
                <Link to="#">Manage Your Devices</Link>
              </li>
              <li>
                <Link to="#">Return Policy</Link>
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h5>Connect With ShopCart</h5>
            <ul class="footer-links">
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
