import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import ProductBestseller from "../components/ProductBestseller";
import ProductCategory from "../components/ProductCategory";

const HomePage = () => {

  return (
    <div className="grid grid-row-4" id="main-container">
      <Header />
      <main>
        <Hero />
        <ProductBestseller />
        <ProductCategory/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
