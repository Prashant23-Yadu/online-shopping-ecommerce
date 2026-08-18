// import React from 'react'

// const AddUsers = () => {
//   return (
//     <>
//     <h1>I am in add User Field</h1>

//     <div className="container">
//         <div className="formbox">
//             <form action="">
//                 <input type="text" 
//                 placeholder='Enter User Name'
//                 />
//                 <input type="phone" 
//                 placeholder='Enter mobile number'
//                 />
//                 <input type="email"
//                 placeholder='Enter email id '
//                  />
//                 <input type="password"
//                 placeholder='Enter password' 
//                 />
//                 <input type="date" 
//                 placeholder='DOB'
//                 />
//             </form>
//         </div>
//     </div>

//     </>
//   )
// }

// export default AddUsers





import React, { useState } from "react";
import '../../assets/style/AddUsers.css'
import axios from "axios";


const AddUsers = () => {

  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    dob: ""
  });

  
  const handleChange = (e) => {
    let keyName = e.target.name
    let keyValue = e.target.value
    
    setUser({ ...user, [keyName]: keyValue });
  };


  const handleSubmit =async (e) => {
    e.preventDefault();

    
    if (!user.username || !user.phone || !user.email || !user.password || !user.dob) {
      alert("Please fill all fields");
      return;
    }

     try {
     
      await axios.post("http://localhost:4000/users", user);
      alert("User Added Successfully ");

      setUser({
        username: "",
        phone: "",
        email: "",
        password: "",
        dob: ""
      });
        
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    
    <div className="addusers">
        <div className="left">
            <img src="" alt="" />
        </div>
        <div className="left">
      <div className="formbox">
        <h2>Add New User</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={user.username}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Mobile Number"
            value={user.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />

          <button type="submit">Register</button>

        </form>
      </div>
      </div>
    </div>
  );
};

export default AddUsers;