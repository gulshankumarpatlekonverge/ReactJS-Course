import React from "react";
import './windowTracker.css';

import WindowTrackerShow from "./windowTrackerShow";

function WindowTracker(){
    const [show, setShow] = React.useState(true);

    function onClickButton(){
        setShow(preShow => !preShow)
    }
    return(
        <div className="container">
            <button onClick={onClickButton}>
                Toggle WindowTracker
            </button>
            {show && <WindowTrackerShow /> }
        </div>
    )
}

export default WindowTracker;