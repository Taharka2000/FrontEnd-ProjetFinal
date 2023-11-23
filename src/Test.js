import React from "react";
import { useLogout } from './Hooks/useLogout'
import { useAuthContext } from './Hooks/useAuthContext'
import Info from "./components/Info";
import NavBar from "./NavBar";
export default function Test() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }


    return (
        <>
            <NavBar />
        <div className="private">
                <Info/>
        </div>
            <button  onClick={handleClick}>LogOut</button>
        </>
    );
}