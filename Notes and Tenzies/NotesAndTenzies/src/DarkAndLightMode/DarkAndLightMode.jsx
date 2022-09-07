import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import './DarkAndLightMode.css'
import { useState } from "react";

function DarkAndLightMode(){
    const [lightDarkMode, setLightDarkMode] = useState(true);

    function toggleLightDarkMode(){
        setLightDarkMode(preMode => !preMode)
    }

    return(
        <div className="container">
            <Navbar lightDarkMode = {lightDarkMode} toggleLightDarkMode = {toggleLightDarkMode}/>
            <Main lightDarkMode = {lightDarkMode}/>
        </div>
    )
}

export default DarkAndLightMode;
