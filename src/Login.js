import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./Hooks/login";
import "./style/Login.css";
import NavBar from "./NavBar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <>
      <NavBar />
      <div className="login">
        <div className="container">
          <h2>Login to your Account</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                value={password}
              />
            </div>
            <button className="bnt1" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </button>
            {error && <div className="error">{error}</div>}
            <span>
              Don't have an account? <Link to="/register">Register Here</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;