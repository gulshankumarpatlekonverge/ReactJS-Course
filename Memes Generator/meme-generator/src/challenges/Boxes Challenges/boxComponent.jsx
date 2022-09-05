import React from "react";

function BoxComponent(props){
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    return(
        //my solution
        // props.on ? <div key={props.id} className="boxes"></div> : <div  key={props.id} className="boxesNone"></div>

        <div style={styles} className="boxes" key={props.id}></div>
    )
}

export default BoxComponent;