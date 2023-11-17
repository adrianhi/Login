import React, { useState } from "react";
import "../styleSheets/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
   
  };

  return (
    <div className="login">
      <form className="form-field" onSubmit={handleSubmit}>
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
        <button className="btn">Login</button>
      </form>
      <button className="btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an Account? Register
      </button>
    </div>
  );
}

export default Login;
