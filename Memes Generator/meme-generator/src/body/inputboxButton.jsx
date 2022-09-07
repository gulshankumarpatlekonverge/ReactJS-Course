import React from "react";
import memesData from "../assets/memesData";


function InputboxButtonComponent(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    // const [memeImage, setMemeImage] = React.useState("");

    function getRandomImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        let imageUrl = memesArray[randomNumber].url;
        setMeme(prevImage => ({
            ...prevImage,
            randomImage: imageUrl
        }));
    }

    function handleMemeText(event){
       const {name, value} = event.target;
       setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
       }))
    }

    return(
        <div className="main-div">
            <div>
                <div className="input-box-div">
                    <input className="input-box-margin input-box" type="text" placeholder="Enter First Phrase" name="topText" value={meme.topText} onChange={handleMemeText} />
                    <input className="input-box" type="text" placeholder="Enter Second Phrase"
                    name="bottomText" value={meme.bottomText} onChange={handleMemeText} /><br></br>
                </div>
                <button onClick={getRandomImage} className="meme-button">Get a new meme image</button>

                <div className="meme">
                    <img src={meme.randomImage} alt="memes-image-container" className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
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