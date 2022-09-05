import React from "react";
import { useState } from "react";

function BoxComponent(props){
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
        
    return (
        <div style={styles} className="boxes" 
            // onClick={() => props.toggle(props.id)}
            onClick={props.toggle}
            ></div>
    )
}

export default BoxComponent;