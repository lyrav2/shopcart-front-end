import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Pagination from "react-bootstrap/Pagination";
import ProductContext from "../context/ProductContext";

const ProductListingPage = () => {
  const {products} = useContext(ProductContext);
  const [tempProducts, setTempProducts] = useState(products);
  const [title, setTitle] = useState("Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [noProducts, setNoProducts] = useState([products.length]);

  const maxItems = 12;
  let items = [];

  const categoryList = [
    ...new Set(products.map((product) => product.category)),
  ];

  const viewAllProducts = () => {
    setTempProducts(products.slice(0, maxItems));
    setNoProducts(products.length);
    setTitle("Products");
  };

  const viewBestsellers = () => {
    setTempProducts(
      products.filter((product) => product.bestseller === true)
    );
    setTitle("Bestsellers");
    setNoProducts(tempProducts.length);
  };

  const clickHandler = (item) => {
    setTempProducts(
      products.filter((product) => product.category === item.category)
    );
    setTitle(item.category);
    setNoProducts(tempProducts.length);
  };

  const changePage = (item) => {
    setCurrentPage(item.number);
    setTempProducts(products.slice(item.number * 12 - 12, item.number * 12));
    setNoProducts(products.length);
  };

  const populateCategory = categoryList.map((category) => (
    <li>
      <button onClick={() => clickHandler({ category })}>{category}</button>
    </li>
  ));

  const showProducts = tempProducts.map((product) => (
    <ProductCard
      key={product._id}
      id={product._id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.productURL}
      category={product.category}
    />
  ));

  for (let number = 1; number <= noProducts / maxItems + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => changePage({ number })}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setTempProducts(products.slice(0, maxItems));
    setTitle("Products");
  }, [products]);

  return (
    <div id="container">
      <Header />
      <main>
        <div className="row">
          <div className="col col-sm-2">
            <div id="sidebar" class="sidebar">
              <h3>Shop by Category</h3>
              <ul>
                <li>
                  <button onClick={() => viewAllProducts()}>
                    View All Products
                  </button>
                </li>
                <li>
                  <button onClick={() => viewBestsellers()}>
                    View Bestsellers
                  </button>
                </li>
                {populateCategory}
              </ul>
            </div>
          </div>
          <div className="col">
            <section id="products-section">
              <div className="title-section">
                <h3>{title}</h3>
              </div>
              {showProducts}
            </section>
            <div>
              <Pagination>{items}</Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
