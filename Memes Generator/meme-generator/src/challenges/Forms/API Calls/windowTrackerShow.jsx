import React from "react";
import './windowTracker.css'

function WindowTrackerShow(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() =>{
        function watchWidth(){
            console.log("setting up");
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", watchWidth);
        return () => {
            console.log("clean up");
            window.removeEventListener("resize", watchWidth)
        }
    },[])
    return(
        <h1>Window width: {windowWidth}</h1>
    )
}

export default WindowTrackerShow;