import React from "react";
import logo from './miniProjectLogo1.jpg';

export default function MiniProjectNavBar(){
    return(
        <header>
            <nav className="nav-item">
                <img src={logo} alt="startDaily.comLogo"></img>
                <h1>startsDaily.com</h1>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}