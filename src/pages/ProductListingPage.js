import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductListingPage = () => {
    return (
        <div id="main-container">
            <Header/>
            <main>
                <section id="products-section">
                    <div>
                        <h1>Products</h1>
                        <p>Test</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductListingPage;