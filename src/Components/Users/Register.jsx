import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/style/AddUsers.css";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: ""
  });

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });

  };


  // ================= REGISTER USER =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const {
      username,
      phone,
      email,
      password,
      confirmPassword,
      dob
    } = user;


    // Check empty fields
    if (
      !username ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword ||
      !dob
    ) {
      alert("Please fill all fields");
      return;
    }


    // Check password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    try {

      // Check whether email already exists
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );

      if (response.data.length > 0) {
        alert("Email already registered ❌");
        return;
      }


      // Create user object
      const newUser = {
        username,
        phone,
        email,
        password,
        dob
      };


      // Save user
      await axios.post(
        "http://localhost:4000/users",
        newUser
      );


      alert("Registration Successful ✅");


      // Clear form
      setUser({
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: ""
      });


    } catch (error) {

      console.error("Registration error:", error);

      alert("Something went wrong ❌");

    }

  };


  return (

    <div className="addusers">

      <div className="formbox">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={user.username}
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Enter Mobile Number"
            value={user.phone}
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            value={user.email}
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
          />

          {/* DOB */}
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />

          {/* Register */}
          <button type="submit">
            Create Account
          </button>

        </form>


        {/* Back to Login */}
        <button
          type="button"
          className="back-login-btn"
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>

      </div>

    </div>

  );

};

export default Register;