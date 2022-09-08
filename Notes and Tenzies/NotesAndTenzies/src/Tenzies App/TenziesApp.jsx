import React from "react";
import Die from "./Die";
import './TenziesApp.css';
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';

export default function TenziesApp(){
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const firstValue = dice[0].value
        const allHeld = dice.every(die => die.held)
        const allSameNumber = dice.every(die => die.value === firstValue)
        if(allHeld && allSameNumber) {
            setTenzies(true)
        }
    }, [dice])
    
    function randomDieValue() {
        return {
            value: Math.ceil(Math.random() * 6),
            held: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newArray = []
        for(let i = 0; i < 10; i++) {
            newArray.push(randomDieValue())
        }
        return newArray
    }

    function rollUnheldDice() {
        if (!tenzies) {
            setDice((oldDice) => oldDice.map((die, i) =>
                die.held ? 
                    die : 
                    randomDieValue()
            ))
        } else {
            setDice(allNewDice())
            setTenzies(false)
        }
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? 
                {...die, held: !die.held} : 
                die
        }))
    }

    const diceElements = dice.map((die) => (
        <Die key={die.id} {...die} hold={() => holdDice(die.id)} />
    ))

    return (
        <main>
            {tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollUnheldDice}>
                {tenzies ? "Reset Game" : "Roll"}
            </button>
        </main>
    )
}