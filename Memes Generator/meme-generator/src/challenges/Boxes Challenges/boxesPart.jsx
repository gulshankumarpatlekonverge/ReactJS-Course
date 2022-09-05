import React, {useState} from "react";
import BoxesData from './boxesData';
import BoxComponent from "./boxComponent";
import './boxes.css'

function BoxesPartOne(){
    const [boxState, setBoxState] = useState(BoxesData);

    let data = boxState.map(value => {
        return(
        <BoxComponent 
            key = {value.id}
            on = {value.on}
        />
       
    )});

    return(
        <div>
            <h1>Boxes will go here</h1>
           {data}
        </div>
    )
}

export default BoxesPartOne;