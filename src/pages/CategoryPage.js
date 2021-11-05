import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCategory from "../components/ProductCategory";
import Link from 'react';

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