

// import React, { useState } from 'react'

// const AddProduct = () => {

//    let [newProduct, setNewproduct] = useState({
    
    
//     "title": "",
//     "price": "",
//     "description": "",
//     "category": "",
//     "image": "",
//     "rating": {
//       "rate": "",
//       "count": ""
//     },
//   })

//   let handleInput = (e) => {
//   let keyName = e.target.name
//   let keyValue = e.target.value

//   if (keyName === "rate" || keyName === "count") {
//     setNewproduct({
//       ...newProduct,
//       rating: {
//         ...newProduct.rating,
//         [keyName]: keyValue
//       }
//     })
//   } else {
//     setNewproduct({
//       ...newProduct,
//       [keyName]: keyValue
//     })
//   }
// }
//      let handleSubmit = (e) =>{
//       e.preventDefault()
//       console.log(newProduct)
//      }
//   return (
//     <>
//     <div className="add-products">
//       <div className="formbox">
//         <form action="" onSubmit={handleSubmit}>
//           <input type="text" 
//           placeholder='Enter title'
//           onChange={handleInput}
//           name="title"
//           />
//           <input type="text"
//            placeholder='Enter price'
//            onChange={handleInput}
//            name="price"
//           />
//           <input type="text" 
//            placeholder='Enter description'
//            onChange={handleInput}
//            name="description"
//           />
//           <input type="text" 
//            placeholder='Enter cat'
//            onChange={handleInput}
//           />
//           <input type="text" 
//            placeholder='Enter image Url'
//            onChange={handleInput}
//            name="image"
//           />
//           <input type="text" 
//            placeholder='Enter Rating'
//            onChange={handleInput}
//            min='0' max='5'
//            name="rate"
//           />
//           <input type="text"
//            placeholder='Enter Count'
//            onChange={handleInput}
//            name="count"
//           />

//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
     
//     </>
//   )
// }

// export default AddProduct





import React, { useState } from "react";
import axios from "axios";
import "../../assets/style/AddProduct.css";

const AddProduct = () => {

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: ""
    }
  });

  const handleInput = (e) => {

    const { name, value } = e.target;

    if (name === "rate" || name === "count") {

      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [name]: value
        }
      });

    } else {

      setNewProduct({
        ...newProduct,
        [name]: value
      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:4000/products",
        newProduct
      );

      alert("Product Added Successfully");

      setNewProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: { rate: "", count: "" }
      });

    } catch (error) {

      console.log("Error adding product", error);

    }

  };

  return (

    <div className="add-product-container">

      <form
        className="add-product-form"
        onSubmit={handleSubmit}
      >

        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Title"
          name="title"
          value={newProduct.title}
          onChange={handleInput}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleInput}
        />

        <textarea
          placeholder="Description"
          name="description"
          value={newProduct.description}
          onChange={handleInput}
        />

        <select
          name="category"
          value={newProduct.category}
          onChange={handleInput}
        >
          <option value="">Select Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={newProduct.image}
          onChange={handleInput}
        />

        <div className="rating-group">

          <input
            type="number"
            placeholder="Rating (0-5)"
            name="rate"
            min="0"
            max="5"
            value={newProduct.rating.rate}
            onChange={handleInput}
          />

          <input
            type="number"
            placeholder="Review Count"
            name="count"
            value={newProduct.rating.count}
            onChange={handleInput}
          />

        </div>

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>

  );

};

export default AddProduct;