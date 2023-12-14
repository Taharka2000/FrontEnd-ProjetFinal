import React from 'react'
import "./style/Nav.css"
import { useState } from 'react'
import { useLogout } from './Hooks/useLogout'
import { useAuthContext } from './Hooks/useAuthContext'
export default function NavBar() {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <>
          
          <header className={color ? "header header-bg" : "header"}>
                <nav className='navBar'>
                    <ul className='flex images justify-center content-center'>
                        <img src="/Sengp.png" width='150px' className='mr-[45%]' alt="" />
                        <li className='pt-2'>
                            <a  href="/">Home</a>
                        </li>
                        <li className='pt-2'>
                            <a href="/about">About</a>
                        </li>
                        <li className='pt-2'>
                            <a href="/services">Services</a>
                        </li>
                        <li className='logo pt-2'>
                            
                            {!user ? (
                                <div>
                                    <div class="navbar">
                                        <div class="dropdown">
                                            <button class="dropbtn">
                                                <i class="fa fa-caret-down"></i><h1>Connection</h1>
                                            </button>
                                            <div class="dropdown-content">
                                                <a href="/login">Login</a>
                                                <a href="/register">Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                            
                                    <div class="navbar">
                                        <div class="dropdown">
                                            <button class="dropbtn">
                                                <h1>Welcome:{user.name}</h1>
                                                <i class="fa fa-caret-down"></i>
                                            </button>
                                            <div class="dropdown-content">
                                                <a href="/">Home</a>
                                                <a href="/account">Account</a>
                                                <a href="#">Link 3</a>
                                                <button  className="text-white bouton" onClick={handleClick}>Log Out</button>
                                            </div>
                                        </div>
                                
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                <div>

                </div>

            </header>
         
         
        </>
    )
}
