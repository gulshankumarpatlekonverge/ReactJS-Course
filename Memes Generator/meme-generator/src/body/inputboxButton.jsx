import React from "react";

function InputboxButtonComponent(){
    return(
        <div className="main-div">
            <form>
                <div className="input-box-div">
                    <input className="input-box" type="text" placeholder="Enter First Phrase"></input>
                    <input className="input-box" type="text" placeholder="Enter Second Phrase"></input>
                </div>
                <button className="meme-button">Get a new meme image</button>
            </form>

            {/* 

            // Using the Grid View and Form
                <main>
                    <form className="form">
                        <input 
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                        />
                        <input 
                            type="text"
                            placeholder="Bottom text"
                            className="form--input"
                        />
                        <button 
                            className="form--button"
                        >
                            Get a new meme image 🖼
                        </button>
                    </form>
                </main> 
            */}

        </div>
    )
}

export default InputboxButtonComponent;