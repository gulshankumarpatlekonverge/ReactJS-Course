import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import './DarkAndLightMode.css'

function DarkAndLightMode(){
    return(
        <div>
            <Navbar />
            <Main />
        </div>
    )
}

export default DarkAndLightMode;
