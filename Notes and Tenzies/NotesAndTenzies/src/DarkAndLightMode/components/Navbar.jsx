import React from "react"
import reacticonsmall from '../images/react-icon-small.png';

export default function Navbar(props) {
    console.log(props)
    return (
         <nav className={props.lightDarkMode ? "dark": ""}>
            <img className="nav--logo_icon" src={reacticonsmall}/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleLightDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}