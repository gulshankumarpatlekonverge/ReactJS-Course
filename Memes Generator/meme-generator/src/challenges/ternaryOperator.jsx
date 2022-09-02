// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
import React from "react";

function TernaryOperatorComponenet(){
    // const isGoingOut = false
    
    const [isGoingOut, SetIsGoingOut] = React.useState(true)
   
    function handleClick(){
        SetIsGoingOut(prevState => !prevState);
     //   SetIsGoingOut(prevState => prevState ? false : true);
    }

    // let answer = isGoingOut ? "Yes" : "No";

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
                {/* <h1>{answer}</h1>
                <h1>{isGoingOut ? "Yes" : "No"}</h1> */}
            </div>
        </div>
    )
}

export default TernaryOperatorComponenet;