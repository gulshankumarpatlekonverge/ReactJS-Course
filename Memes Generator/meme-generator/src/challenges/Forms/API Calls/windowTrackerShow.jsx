import React from "react";
import './windowTracker.css'

function WindowTrackerShow(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() =>{
        window.addEventListener("resize", function(){
        setWindowWidth(window.innerWidth);
        })
    },[])
    return(
        <h1>Window width: {windowWidth}</h1>
    )
}

export default WindowTrackerShow;