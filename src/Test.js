import React from "react";
import Info from "./components/Info";
import NavBar from "./NavBar";

export default function Test() {
    return (
        <>
            <NavBar />
            <div className="private">
                <Info />
            </div>
        </>
    );
}