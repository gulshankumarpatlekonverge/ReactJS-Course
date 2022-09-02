import React from "react";

function UseStateComponent(){

    // Challenge 3
    const [isImportant, setIsImportant] = React.useState("Yes");
    // setIsImportant("No");
    // console.log(isImportant);

    function handleStateClick(){
        setIsImportant("No");
    }

    // Challenge 4- counter practice

    const [count, setCount] = React.useState(0);
    function add(){
    /** USING CALLBACK FUNCTION:
     * 
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    //    setCount(count + 1);
    setCount(function (oldValue){
        return oldValue + 1;
    })
    }

    function minus(){
    //   setCount(count - 1);
    
    setCount(prevCount => prevCount - 1);

    }
    return(
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleStateClick}>
                <h1>{isImportant}</h1>
            </div>

            {/* Challenge 4 - counter practice */}
            <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
        </div>
    )
}

export default UseStateComponent;