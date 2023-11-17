import React, { useState } from "react";
import "../styleSheets/Login.css";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="Register">
      <form className="form-field" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="John Doe"
          name="name"
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@email.com"
          name="email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />

        <button className="btn">Register</button>
      </form>

      <button className="btn" onClick={() => props.onFormSwitch("login")}>
        Already have an Account? Login
      </button>
    </div>
  );
}

export default Register;
