import React from "react";
import JokesData from "./JokesData";
import './jokes.css'

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false);

    // let dataValue = (isShown === true) ? <p>{props.punchline}</p> : false

    function handleShowJoke(){ 
        setIsShown(prevShow => !prevShow)
    }


    const [message, setMessge] = React.useState(["a", "a", 'a']);
    return (
        <>
            <div>
                {props.setup && <h3>{props.setup}</h3>}
                {/* <p>{dataValue}</p> */}
                {isShown && <p>{props.punchline}</p>}
                <button className="button-show" onClick={handleShowJoke}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
                <hr />
            </div>

            <div>
                {/* { message.length > 0 && <h1>You have {message.length} unread messages!</h1>} */}

                {
                    message.length === 0 ? <h1>You all Caught up!</h1>: <h1>You have {message.length} unread {message.length > 1 ? "messages" : "message"}</h1>
                }
            </div>
        </>
    )
}