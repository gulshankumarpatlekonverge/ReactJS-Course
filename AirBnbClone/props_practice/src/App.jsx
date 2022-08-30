import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import JokesBox from './jokes'
import JokesData from './jokesData'
import jokesData from './jokesData'

function App() {
    console.log(JokesData);
    const jokeElement = JokesData.map(joke => {
    return  <JokesBox setup = {joke.setup} punchline = {joke.punchline} ratings = {joke.ratings}/>
    })
  return (
      <div>
        <h1>Jokes Board</h1>
        {jokeElement}
      </div>


  )
}

export default App
