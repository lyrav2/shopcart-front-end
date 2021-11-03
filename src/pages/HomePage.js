import {useEffect,useContext} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from '../components/ProductCard';

import ProductContext from "../context/ProductContext";
import ProductBestseller from '../components/ProductBestseller';
import ProductCategory from '../components/ProductCategory';

const HomePage = () => {
    const {setProducts} = useContext(ProductContext);

    useEffect(() => {
        fetch("http://localhost:5000/products?featured=yes")
        .then(response=>response.json())
        .then(json=>{
            setProducts(json.data);
        })
        .catch(err=>{
            console.log(`An error has occurred: ${err}`);
        })
    },[])

    return (
        <div className="grid grid-row-4" id="main-container">
            <Header/>
            <main>
                <Hero/>
                <ProductBestseller/>
                <ProductCategory/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage;