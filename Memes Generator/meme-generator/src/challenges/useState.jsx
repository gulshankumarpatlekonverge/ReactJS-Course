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
       setCount(count + 1);
    }

    function minus(){
      setCount(count - 1);
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