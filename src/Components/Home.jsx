
import React from "react";
import "../assets/style/home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Upgrade Your Lifestyle</h1>
          <p>Discover trending products at unbeatable prices</p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-container">
          <div className="category-card">👕 Men's Clothing</div>
          <div className="category-card">👗 Women's Clothing</div>
          <div className="category-card">💻 Electronics</div>
          <div className="category-card">💎 Jewelry</div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-container">
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="product" />
            <h3>Fjallraven - Foldsack No. 1 Backpack</h3>
            <p>$99</p>
            {/* <button>Add to Cart</button> */}
          </div>

          <div className="product-card">
            <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" alt="product" />
            <h3>Mens Casual Premium Slim Fit T-Shirts</h3>
            <p>$149</p>
            {/* <button>Add to Cart</button> */}
          </div>

          <div className="product-card">
            <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" alt="product" />
            <h3>White Gold Plated Princess</h3>
            <p>$199</p>
            {/* <button>Add to Cart</button> */}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="offer">
        <h2>🔥 Limited Time Offer</h2>
        <p>Flat 50% OFF on selected items</p>
        <button className="btn-secondary">Explore Now</button>
      </section>

    </div>
  );
};

export default Home;

