// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import '../assets/style/viewmore.css'

// const ViewMore = () => {
//     let params = useParams()
//     let productId = params.id

//      const location = useLocation();
//   const isAdmin = location.pathname.startsWith("/adminportel");

//    const navigate = useNavigate();


// let [card,setCard] = useState({})

// let fetchApi = async () =>{
//     let productData = await axios.get(`http://localhost:4000/products/${productId}`)
//     setCard(productData.data)
// }

// useEffect(()=>{
//     fetchApi()
// },[])

// let {title,image,price,description,category,rating} = card

//   let closeCard = () =>{
//     if(bool)
//       navigator('/adminportel/products')
//     else
//       navigator('/userportel/products')

//   }

  
//   // Add To Cart
//   const handleAddToCart = (product) => {

//     if (!product || !product.id) {
//       alert("Product not loaded yet");
//       return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const exists = cart.find((item) => item.id === product.id);

//     if (exists) {

//       cart = cart.map((item) =>
//         item.id === product.id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       );

//     } else {

//       cart.push({
//         ...product,
//         qty: 1
//       });

//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Product Added To Cart");

//   };
//   return (
//     <>
//     <div className="view-container">
//     <div className="view-card">

//       <div className="view-image">
//         <img src={image} alt={title} />
//       </div>

//       <div className="view-details">
//         <h2>{title}</h2>
//         <p className="category">{category}</p>

//         <div className="rating">
//           ⭐ {rating?.rate} ({rating?.count} reviews)
//         </div>

//         <h3 className="price">$ {price}</h3>

//         <p className="description">{description}</p>

//         <button className="buy-btn" 
//         onClick={()=> handleAddToCart(card)}>
//           Add To Cart
//         </button>

        
//       </div>

//     </div>
//   </div>
        
//     </>
//   )
// }

// export default ViewMore




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import '../assets/style/viewmore.css'

const ViewMore = () => {

  const params = useParams();
  const productId = params.id;

  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/adminportel");

  const navigate = useNavigate();

  const [card, setCard] = useState({});

  // Fetch Product
  const fetchApi = async () => {
    try {

      const productData = await axios.get(
        `http://localhost:4000/products/${productId}`
      );

      setCard(productData.data);

    } catch (error) {

      console.log("Error fetching product", error);

    }
  };

  useEffect(() => {
    fetchApi();
  }, [productId]);

  const { title, image, price, description, category, rating } = card;

  // Back Button
  const closeCard = () => {

    if (isAdmin) {
      navigate("/adminportel/products");
    } else {
      navigate("/userportel/products");
    }

  };

  // Add To Cart
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

  if (!card.id) {
  return <h2>Loading Product...</h2>;
}

  return (

    <div className="viewmore">

      <div className="view-card">

        {/* Left Side Image */}
        <div className="left">

          <img src={image} alt={title} />

        </div>

        {/* Right Side Details */}
        <div className="right">

          <h2 className="title">{title}</h2>

          <span>{rating?.rate}</span>
          <span>{rating?.count} Reviews</span>

          <p className="price">$ {price}</p>

          <p className="category">{category}</p>

          <p className="description">{description}</p>

          <div className="rating-box"></div>

          {/* User Add To Cart */}
          {!isAdmin && (

            <button
              className="buy-btn"
              onClick={() => handleAddToCart(card)}
            >

              Add To Cart

            </button>

          )}

          {/* Back Button */}
          <button
            className="back-btn"
            onClick={closeCard}
          >

            Back

          </button>

        </div>

      </div>

    </div>

  );

};

export default ViewMore;



