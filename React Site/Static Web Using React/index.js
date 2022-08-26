
//Challenge 5

// import React from "react";
// import ReactDOM from "react";

const pageContent =(
    <div>
        <img src="./React-icon.svg.png" alt="react logo" height="100px" width="100px"></img>
        <h1>Fun Fact About ReactJs</h1>
        <ul>
            <li>Was first realesed in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has over 100K starts on GitHub</li>
            <li>Is maintaine by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(pageContent, document.getElementById("root"));


// function name should follow Pascals Case(PascalsCase()) not the Camel case(camelCase())

function customComponent(){
    return(
        <div>
        <img src="./React-icon.svg.png" alt="react logo" height="100px" width="100px"></img>
        <h1>Fun Fact About ReactJs</h1>
        <ul>
            <li>Was first realesed in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has over 100K starts on GitHub</li>
            <li>Is maintaine by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

ReactDOM.render(customComponent(), document.getElementById("root1"));



function CustomComponent(){
    return(
        <div>
        <img src="./React-icon.svg.png" alt="react logo" height="100px" width="100px"></img>
        <h1>Fun Fact About ReactJs</h1>
        <ul>
            <li>Was first realesed in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has over 100K starts on GitHub</li>
            <li>Is maintaine by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

// while calling the function wrap in angle bracket as html element
ReactDOM.render(<CustomComponent />, document.getElementById("root2"));


// challenge 6 - custom component

function OwnCustomComponent(){
    return(
        <div>
            <header>
                <img src="./quiz.png" alt="random-image-quiz.png" width="100px" height="100px"></img>
            </header>
            <h1>Top Most Hindi and English Series</h1>
            <ul>
                <li>Special Ops</li>
                <li>Mirzapur</li>
                <li>Sacred Games</li>
                <li>She Hulk</li>
                <li>Captain Marvel</li>
            </ul>
            <footer>2021 copyright All Right Reserved</footer>
        </div>
    )
}

ReactDOM.render(<OwnCustomComponent />, document.getElementById("hindiEnglishSeries"));





