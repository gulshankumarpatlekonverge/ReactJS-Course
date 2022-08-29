import React from "react";

function JokesBox(props){
    console.log(props);
    return(
        <div className="div-joke">
            <h3>Setup: {props.setup}</h3>
            {/* <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3> */}
            {/* {props.setup && <h3>Setup: {props.setup}</h3>} */}
            <p>Punchline: {props.punchline}</p>
            <p>Ratings: {props.ratings}</p>
            {/* <span>UpVotes: {upVoteDownVote}</span>
            <span>DownVotes: {upVoteDownVote[1]}</span> */}
        </div>
    )
}

export default JokesBox;


// The above code on line number 8 and 9 are used to remove the null props value content.


// Setup: I got my daughter a fridge for her birthday.
// Punchline: I can't wait to see her face light up when she opens it.

// ---

// Setup: How did the hacker escape the police?
// Punchline: He just ransomware!

// ---

// Setup: Why don't pirates travel on mountain roads?
// Punchline: Scurvy.

// ---

// Setup: Why do bees stay in the hive in the winter?
// Punchline: Swarm.

// ---

// Setup: What's the best thing about Switzerland?
// Punchline: I don't know, but the flag is a big plus!