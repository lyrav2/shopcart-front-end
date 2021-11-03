import {useEffect,useContext} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard';
// import Hero from "../components/Hero";

const HomePage = () => {
    //const {setProducts} = useContext(ProductsContext);

    useEffect(() => {

    },[])

    return (
        <div className="grid grid-row-4" id="main-container">
            <Header/>
            <main>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage;