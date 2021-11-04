import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Pagination from "react-bootstrap/Pagination";

const ProductListingPage = (props) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryList = [
    ...new Set(props.products.map((product) => product.category)),
  ];

  const viewAllProducts = () => {
    setProducts(props.products);
  };

  const clickHandler = (item) => {
    setProducts(
      props.products.filter((product) => product.category === item.category)
    );
  };

  const changePage = (item) => {
    setCurrentPage(item.number);
    products.filter((product) => product.indexOf === 1);
  };

  const populateCategory = categoryList.map((category) => (
    <li>
      <button onClick={() => clickHandler({ category })}>{category}</button>
    </li>
  ));

  const showProducts = products.map((product) => (
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

  let items = [];
  for (let number = 1; number <= 5; number++) {
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
    setProducts(props.products);
  }, [props]);

  return (
    <div id="container">
      <Header />
      <main>
        <div class="row">
          <div class="col-sm">
            <div id="sidebar" class="sidebar">
              <h3>Shop by Category</h3>
              <ul>
                <li>
                  <button onClick={() => viewAllProducts()}>
                    View All Products
                  </button>
                </li>
                {populateCategory}
              </ul>
            </div>
          </div>
          <div class="col-10">
            <section id="products-section">
              <h3>Products</h3>
              <div className="product-container">{showProducts}</div>
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
