import React, {useState} from "react";
import BoxesData from './boxesData';
import BoxComponent from "./boxComponent";
import './boxes.css'

function BoxesPartOne(){
    const [boxState, setBoxState] = useState(BoxesData);

    function toggle(id) {
        console.log(id);
        setBoxState(prevState => {
            // const newState = [];
            // for(let i =0; i < prevState.length; i++){
            //     const currentState = prevState[i];
            //     if(currentState.id === id){
            //         const updateState = {
            //             ...currentState,
            //             on: !currentState.on
            //         }
            //         newState.push(updateState);
            //     } else{
            //         newState.push(currentState);
            //     }
            // }
            // return newState;

            return prevState.map((state) => {
                return state.id === id ? {...state, on: !state.on} : state;
            })
        })
    }

    let data = boxState.map(value => {
        return(
        <BoxComponent 
            key = {value.id}
            id = {value.id}
            on = {value.on}
            // toggle = {toggle}
            toggle = {() => toggle(value.id)}
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