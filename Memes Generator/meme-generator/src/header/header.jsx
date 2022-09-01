import React from "react";
import MemeIcon from './meme-icon.png';
function HeaderComponent(){
    return(
        <header>
            <nav className="nav-bar">
                <img src={MemeIcon} className="meme-icon-img"></img>
                <h2>Memes Generator</h2>
                <p><a className="h2-anchor-tag" href="https://www.google.com">More about Memes Generator</a></p>
            </nav>
        </header>
    )
}

export default HeaderComponent;