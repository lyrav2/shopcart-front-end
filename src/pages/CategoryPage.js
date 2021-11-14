import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCategory from "../components/ProductCategory";

const CategoryPage = (props) => {
    return (
        <div id="main-container">
            <Header/>
            <main>
                <section id="about-section">
                    <div>
                        <ProductCategory products={props.products}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default CategoryPage;