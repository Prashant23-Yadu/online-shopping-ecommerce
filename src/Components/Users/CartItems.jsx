
// import React, { useEffect, useState } from "react";
// import "../../assets/style/cartitem.css";

// const CartItems = () => {

//   const [items, setItems] = useState([]);

//   // Load cart
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//       console.log("CART DATA:", cartData);

//   setItems(cartData);
//   }, []);

//   // Save cart
//   const updateCart = (updatedItems) => {
//     setItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   // Increase quantity
//   const increaseQty = (index) => {
//     const updatedItems = [...items];
//     updatedItems[index].quantity += 1;
//     updateCart(updatedItems);
//   };

//   // Decrease quantity
//   const decreaseQty = (index) => {
//     const updatedItems = [...items];

//     if (updatedItems[index].quantity > 1) {
//       updatedItems[index].quantity -= 1;
//       updateCart(updatedItems);
//     }
//   };

//   // Remove item
//   const removeItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     updateCart(updatedItems);
//   };

//   // Calculate total price
//   const grandTotal = items.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);

//   return (
//     <div className="cart_container">

//       <h2>🛒 Your Shopping Cart</h2>

//       {items.length === 0 ? (
//         <p className="empty_cart">No Items In Cart</p>
//       ) : (
//         <>
//           <table className="cart_table">

//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Product</th>
//                 <th>Image</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>

//               {items.map((item, index) => (

//                 <tr key={index}>

//                   <td>{index + 1}</td>

//                   <td>{item.title}</td>

//                   <td>
//                     <img src={item.image} alt={item.name} />
//                   </td>

//                   <td>₹ {item.price}</td>

//                   <td>

//                     <button
//                       className="qty_btn"
//                       onClick={() => decreaseQty(index)}
//                     >
//                       -
//                     </button>

//                     <span className="qty_text">
//                       {item.quantity}
//                     </span>

//                     <button
//                       className="qty_btn"
//                       onClick={() => increaseQty(index)}
//                     >
//                       +
//                     </button>

//                   </td>

//                   <td>
//                     ₹ {item.price * item.quantity}
//                   </td>

//                   <td>
//                     <button
//                       className="remove_btn"
//                       onClick={() => removeItem(index)}
//                     >
//                       Remove
//                     </button>
//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//           <div className="cart_total">
//             <h3>Grand Total: ₹ {grandTotal}</h3>
//           </div>
//         </>
//       )}

//     </div>
//   );
// };

// export default CartItems;



import React, { useEffect, useState } from "react";
import "../../assets/style/cartitem.css";

const CartItems = () => {

  const [items, setItems] = useState([]);

  // ================= LOAD CART =================
  useEffect(() => {

    const cartData =
      JSON.parse(localStorage.getItem("cart")) || [];

    console.log("CART DATA:", cartData);

    // IMPORTANT: Load localStorage data into React state
    setItems(cartData);

  }, []);


  // ================= SAVE CART =================
  const updateCart = (updatedItems) => {

    setItems(updatedItems);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedItems)
    );

  };


  // ================= INCREASE QUANTITY =================
  const increaseQty = (index) => {

    const updatedItems = [...items];

    updatedItems[index].quantity += 1;

    updateCart(updatedItems);

  };


  // ================= DECREASE QUANTITY =================
  const decreaseQty = (index) => {

    const updatedItems = [...items];

    if (updatedItems[index].quantity > 1) {

      updatedItems[index].quantity -= 1;

      updateCart(updatedItems);

    }

  };


  // ================= REMOVE ITEM =================
  const removeItem = (index) => {

    const updatedItems = items.filter(
      (_, i) => i !== index
    );

    updateCart(updatedItems);

  };


  // ================= GRAND TOTAL =================
  const grandTotal = items.reduce(
    (total, item) => {

      return total + Number(item.price) * Number(item.quantity);

    },
    0
  );


  return (

    <div className="cart_container">

      {/* ================= HEADING ================= */}

      <h2 className="cart_heading">
        🛒 Your Shopping Cart
      </h2>


      {/* ================= EMPTY CART ================= */}

      {items.length === 0 ? (

        <p className="empty_cart">
          No Items In Cart
        </p>

      ) : (

        <>

          {/* ================= CART TABLE ================= */}

          <table className="cart_table">

            <thead>

              <tr>

                <th>S.No</th>

                <th>Product</th>

                <th>Image</th>

                <th>Price</th>

                <th>Quantity</th>

                <th>Total</th>

                <th>Action</th>

              </tr>

            </thead>


            <tbody>

              {items.map((item, index) => (

                <tr key={item.id || index}>

                  {/* S.NO */}

                  <td>
                    {index + 1}
                  </td>


                  {/* PRODUCT TITLE */}

                  <td className="product_title">
                    {item.title}
                  </td>


                  {/* IMAGE */}

                  <td>

                    <img
                      className="product_image"
                      src={item.image}
                      alt={item.title}
                    />

                  </td>


                  {/* PRICE */}

                  <td className="price">
                    ₹ {Number(item.price).toFixed(2)}
                  </td>


                  {/* QUANTITY */}

                  <td>

                    <div className="quantity_box">

                      <button
                        className="qty_btn"
                        onClick={() =>
                          decreaseQty(index)
                        }
                      >
                        -
                      </button>


                      <span className="qty_text">
                        {item.quantity}
                      </span>


                      <button
                        className="qty_btn"
                        onClick={() =>
                          increaseQty(index)
                        }
                      >
                        +
                      </button>

                    </div>

                  </td>


                  {/* TOTAL */}

                  <td className="price">

                    ₹{" "}
                    {(
                      Number(item.price) *
                      Number(item.quantity)
                    ).toFixed(2)}

                  </td>


                  {/* REMOVE */}

                  <td>

                    <button
                      className="remove_btn"
                      onClick={() =>
                        removeItem(index)
                      }
                    >
                      Remove
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>


          {/* ================= GRAND TOTAL ================= */}

          <div className="cart_total">

            <h3>
              Grand Total: ₹ {grandTotal.toFixed(2)}
            </h3>

          </div>

        </>

      )}

    </div>

  );

};

export default CartItems;