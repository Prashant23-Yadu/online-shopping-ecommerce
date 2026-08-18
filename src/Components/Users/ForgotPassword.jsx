import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import '../../assets/style/landingpage.css'
const ForgotPassword = () => {

  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    dob: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInput = (e) => {
    const keyName = e.target.name;
    const keyValue = e.target.value;

    setFormdata({
      ...formdata,
      [keyName]: keyValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       console.log("1. Reset button clicked");

    const {
      email,
      dob,
      newPassword,
      confirmPassword
    } = formdata;
    
     console.log("2. Form data:", formdata);
    // Check all fields
    if (!email || !dob || !newPassword || !confirmPassword) {
        console.log("3. Some field is empty");
      toast.error("Please fill all fields ❌");
      return;
    }

    // Check password match
    if (newPassword !== confirmPassword) {
         console.log("4. Passwords do not match");
      toast.error("Passwords do not match ❌");
      return;
    }
     console.log("5. Validation successful");

    try {
         console.log("6. Calling GET API");

      // Get user using email
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );
      console.log("7. API response:", response.data);

      const users = response.data;

      if (users.length === 0) {
        
        console.log("8. User not found");
        toast.error("Email not found ❌");
        return;
      }

      const user = users[0];
      console.log("9. User found:", user);

      // Check DOB
      console.log("Database DOB:", user.dob);
       console.log("Entered DOB:", dob);
      if (user.dob !== dob) {
        console.log("10. DOB mismatch");
        toast.error("Date of birth is incorrect ❌");
        return;
      }
      console.log("11. DOB matched");

      // Update password
      await axios.patch(
        `http://localhost:4000/users/${user.id}`,
        {
          password: newPassword
        }
      );
      console.log("12. Password updated");

      toast.success("Password changed successfully ✅");

      // Go back to login
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {

      console.log(error);

       console.log("13. ERROR:", error);

      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="forgot-page">

      <div className="forgot-box">

        <h2>Forgot Password?</h2>

        <p>
          Enter your email and date of birth to reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleInput}
          />

          <input
            type="date"
            name="dob"
            value={formdata.dob}
            onChange={handleInput}
          />

          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formdata.newPassword}
            onChange={handleInput}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formdata.confirmPassword}
            onChange={handleInput}
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        <Link to="/" className="back-login">
          Back to Login
        </Link>

      </div>

    </div>
  );
};

export default ForgotPassword;