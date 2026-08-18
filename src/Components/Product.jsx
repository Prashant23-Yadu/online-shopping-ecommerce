// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import '../assets/style/Product.css'
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';


// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   let location = useLocation()

//   let bool = location.pathname.startsWith('/adminportel')

//   // Fetch API
//   const fetchApi = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/products");
//       setProducts(response.data);
//       setFilteredData(response.data); // show all products initially
//     } catch (error) {
//       console.log("API Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   // Filter function
//   const handleClick = (category) => {
//     if (category === "all") {
//       setFilteredData(products);
//     } else {
//       const result = products.filter(
//         (item) => item.category === category
//       );
//       setFilteredData(result);
//     }
//   };
  
//   let handleDelete = (id) =>{
//     let bool =  confirm('Do you want to delete this product');

//     if(bool) {
//       axios.delete(`http://localhost:4000/products/${id}`)
//       alert(`Product Deleted Succesfuuly`)
//       window.location.reload()
//     }
//     else{
//        alert(`Product is not Deleted`)

//     }
//   }

//   let navigate = useNavigate()
//   let handleViewMore = (id) =>{
//     if(bool)
//     navigate(`/adminportel/viewmore/${id}`);
//   else
//     navigate(`/userportel/viewmore/${id}`);

//   };
  

//   return (
//     <div className="products">

//       {/* Top Right Dropdown */}
//       <div className="top-bar">
//         <div className="category-select">
//           <h3>Select Category</h3>

//           <select onChange={(e) => handleClick(e.target.value)}>
//             <option value="all">All Products</option>
//             <option value="men's clothing">Men</option>
//             <option value="women's clothing">Women</option>
//             <option value="electronics">Electronics</option>
//             <option value="jewelery">Jewelery</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Section */}
//       <div className="product-list">
//         {filteredData.length > 0 ? (
//           filteredData.map((item) => (
//             <div key={item.id} className="card">
//               <img src={item.image} alt={item.title} />
//               <h3>{item.title}</h3>
//               <p>$ {item.price}</p>
              

//               {bool && (
//                  <div className="btn1">
//                  <button onClick={() => handleDelete(item.id)}>Delete</button>
//                  </div>
//                   )}

//               <div className="viewmore">
//                 <button onClick={() => handleViewMore(item.id)}>
//               View More
//                 </button>
//             </div>
//             </div>
           
//           ))
//         ) : (
//           <h2 className="no-data">No Products Found</h2>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Products;







import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/Product.css";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = location.pathname.startsWith("/adminportel");

  // ================= FETCH PRODUCTS =================
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/products");

      setProducts(res.data);
      setFilteredData(res.data);

    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ================= CATEGORY FILTER =================
  const handleCategory = (category) => {

    if (category === "all") {
      setFilteredData(products);
      return;
    }

    const result = products.filter(
      (item) => item.category === category
    );

    setFilteredData(result);
  };

  // ================= DELETE PRODUCT =================
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Do you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(`http://localhost:4000/products/${id}`);

      const updatedProducts = products.filter(
        (item) => item.id !== id
      );

      setProducts(updatedProducts);
      setFilteredData(updatedProducts);

      alert("Product deleted successfully");

    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // ================= VIEW MORE =================
  const handleViewMore = (id) => {

    if (isAdmin) {
      navigate(`/adminportel/viewmore/${id}`);
    } else {
      navigate(`/userportel/viewmore/${id}`);
    }

    
  };

  // ================= ADD TO CART =================
  const handleAddToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart");

  };

  return (
    <div className="products">

      {/* CATEGORY FILTER */}
      <div className="top-bar">
        <div className="category-select">

          <h3>Select Category</h3>

          <select
            onChange={(e) =>
              handleCategory(e.target.value)
            }
          >
            <option value="all">All Products</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>

        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list">

        {loading ? (
          <h2>Loading Products...</h2>
        ) : filteredData.length > 0 ? (

          filteredData.map((item) => (

            <div key={item.id} className="card">

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>$ {item.price}</p>

              <div className="btn-group">

                <button
                  onClick={() => handleViewMore(item.id)}
                >
                  View More
                </button>

                {!isAdmin && (
                  <button
                    className="cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                )}

                {isAdmin && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                )}

              </div>

            </div>

          ))

        ) : (
          <h2 className="no-data">
            No Products Found
          </h2>
        )}

      </div>

    </div>
  );
};

export default Products;

