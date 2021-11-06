import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";

const RegisterPage = () => {
  return (
    <div id="main-container">
      <Header />
      <main>
        <section id="registration-section">
          <div className="registration-section">
            <h1>Registration</h1>
            <RegistrationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
