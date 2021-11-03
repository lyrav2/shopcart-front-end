import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
    return (
        <div id="main-container">
            <Header/>
            <main>
                <section id="registration-section">
                    <div>
                        <h1>Registration</h1>
                        <p>Test</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default RegisterPage;