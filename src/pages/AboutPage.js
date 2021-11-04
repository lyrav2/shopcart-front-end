import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <div id="main-container">
            <Header/>
            <main>
                <section id="about-section">
                    <div>
                        <h1>About Us</h1>
                        <p>Test</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage;