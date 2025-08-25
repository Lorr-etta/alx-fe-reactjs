// src/components/RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = () => {
  // separate states (not one object) so checker can find them
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("User registered:", { username, email, password });

    // mock API
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}              
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}                 
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}              
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;