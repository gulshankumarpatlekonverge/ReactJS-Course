import React from "react";
import logo from './React-icon.svg.png';
// export default 
function HeaderReact(){
    return(
        <div>
            <nav className="nav-item">
                <img src={logo} alt="react logo" className="img-item"></img>
                <ul className="headerList">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>  
    )
};

export default HeaderReact;