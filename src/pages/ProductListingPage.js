import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Pagination from "react-bootstrap/Pagination";

const ProductListingPage = (props) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [noProducts, setNoProducts] = useState([props.products.length]);
  const maxItems = 12;
  let items = [];

  const categoryList = [
    ...new Set(props.products.map((product) => product.category)),
  ];

  const viewAllProducts = () => {
    setProducts(props.products.slice(0, maxItems));
    setNoProducts(props.products.length);
    setTitle("Products");
  };

  const viewBestsellers = () => {
    setProducts(
      props.products.filter((product) => product.bestseller === true)
    );
    setTitle("Bestsellers");
    setNoProducts(products.length);
  };

  const clickHandler = (item) => {
    setProducts(
      props.products.filter((product) => product.category === item.category)
    );
    setTitle(item.category);
    setNoProducts(products.length);
  };

  const changePage = (item) => {
    setCurrentPage(item.number);
    setProducts(props.products.slice(item.number * 12 - 12, item.number * 12));
    setNoProducts(props.products.length);
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
    setProducts(props.products.slice(0, maxItems));
    setTitle("Products");
  }, [props]);

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
