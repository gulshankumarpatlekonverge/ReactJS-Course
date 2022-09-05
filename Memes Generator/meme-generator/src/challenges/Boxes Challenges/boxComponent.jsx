import React from "react";
import { useState } from "react";

function BoxComponent(props){
    const [onState, setOnState] = useState(props.on)
    
    const styles = {
        backgroundColor: onState ? "#222222" : "transparent"
    }
    
    function toggle() {
        setOnState(prevOn => !prevOn)
    }
    
    return (
        <div style={styles} className="boxes" onClick={toggle}></div>
    )
}

export default BoxComponent;