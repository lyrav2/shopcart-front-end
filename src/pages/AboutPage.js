import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div id="main-container">
      <Header />
      <main>
        <section id="about-section">
          <div className="row md-center about-section">
            <div className="col col-xs-1">
              <h2>About Us</h2>
            </div>
            <div className="col col-lg-10">
              <p>ShopCart is the assignment for WEB422.</p>
              <p>
                It uses HTML, CSS, JS, JSX, and React to pull data using a
                RESTful API.
              </p>
              <p>To look at more of my projects, visit <a href="https://github.com/lyrav2" >my Github</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
