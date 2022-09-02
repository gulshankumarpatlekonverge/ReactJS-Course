import React from "react";
import memesData from "../assets/memesData";


function InputboxButtonComponent(){
    const [memeImage, setMemeImage] = React.useState("");
    function getRandomImage(){
        // console.log(memesData.data.memes[0].url);
        // const memesData = memesData.data.memes.map(value => value.url);
        // console.log(memesData);

        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        let imageUrl = memesArray[randomNumber].url;
        setMemeImage(imageUrl);
    }

    return(
        <div className="main-div">
            <div>
                <div className="input-box-div">
                    <input className="input-box-margin input-box" type="text" placeholder="Enter First Phrase"></input>
                    <input className="input-box" type="text" placeholder="Enter Second Phrase"></input><br></br>
                </div>
                <button onClick={getRandomImage} className="meme-button">Get a new meme image</button>

                <div className="meme-image-container">
                    <img src={memeImage} alt="memes-image-container"></img>
                </div>
            </div>

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