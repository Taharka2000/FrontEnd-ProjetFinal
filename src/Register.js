import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "./Hooks/Resgister";
import NavBar from "./NavBar";
import "./style/Login.css"
 const Register=()=>{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const {signup,error,isLoading}=useSignup()
 
 const handleSubmit=async (e)=>{
    e.preventDefault()
    await signup(email,password,name)
   }
  
  return (
    <>
    <NavBar/> 
      <div className="login">
        <div className="container">
          <h2>Register to your Account</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setEmail( e.target.value)
                }
                value={email}
              />
            </div>
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={(e) =>
                  setName(e.target.value )
                }
                value={name}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setPassword( e.target.value )
                }
                value={password}
              />
            </div>
            <button className="bnt1" disabled={isLoading}>Submit</button>
            <span>
              You already have a account<Link to="/login">Login</Link>
            </span>
            <h1> <Link to="/verification">Proposer vos services de livraisons ou de GP</Link> </h1>
          {error && <div>:{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;