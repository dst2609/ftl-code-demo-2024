import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //handle register
  const handleRegister = async () => {
    try {
      //register the user
      const response = await axios.post(
        "http://localhost:3000/users/register",
        { username, password }
      );
      //login the user
      const loginResponse = await axios.post(
        "http://localhost:3000/users/login",
        { username, password }
      );

      //store the toekn in the localstorage as token
      localStorage.setItem("token", loginResponse.data.token);
      navigate("/cars");
    } catch (error) {
      alert("Registration failed. Try again");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Register;
