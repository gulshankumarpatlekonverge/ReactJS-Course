// https://reactjs.org/docs/hooks-effect.html
// https://overreacted.io/a-complete-guide-to-useeffect/
import React, {useState, useEffect} from "react";

function MakingApiCalls(){
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);
    // 1. GET the data (fetch)  or (axios) 
    // 2. Save the data to state
    console.log("Component Rendered")

    // fetch("https://swapi.dev/api/people/1").then(res => res.json()).then(data => setStarWarsData(data));

    // side effects in react

    // useEffect(function() {
    //     console.log("Effect Function Ran");
    // },[count])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/"+ count).then(res => res.json()).then(data => setStarWarsData(data))
    }, [count])
    

    return(
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            {/* <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> */}
        </div>
    )
}

export default MakingApiCalls;