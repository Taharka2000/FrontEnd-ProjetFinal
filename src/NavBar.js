import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style/Nav.css";
import { useLogout } from './Hooks/useLogout';
import { useAuthContext } from './Hooks/useAuthContext';

export default function NavBar() {
    const [color, setColor] = useState(false);
    const { user } = useAuthContext();
    const { logout } = useLogout();

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor(true);
            } else {
                setColor(false);
            }
        };

        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
    }, []);

    const handleClick = () => {
        logout();
    };
    return (
        <header className={color ? "header header-bg" : "header"}>
            <nav className='navBar'>
                <ul className='flex images justify-center content-center'>
                    <img src="/Sengp.png" width='150px' className='mr-[45%]' alt="SenGP Logo" />
                    <li className='pt-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='pt-2'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='pt-2'>
                        <Link to="/services">Services</Link>
                    </li>
                    <li className='logo pt-2'>
                        {!user ? (
                            <div className="navbar">
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <i className="fa fa-caret-down"></i>
                                        <h1>Connection</h1>
                                    </button>
                                    <div className="dropdown-content">
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="navbar">
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <h1>Welcome: {user.name}</h1>
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <Link to="/">Home</Link>
                                        <Link to="/account">Account</Link>
                                        <button className="text-white bouton" onClick={handleClick}>
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
