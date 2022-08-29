import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import JokesBox from './jokes'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Jokes Board</h1>
        <JokesBox 
            // setup ="I got my daughter a fridge for her birthday."
            punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally."
            ratings = {0}
        />
        
        <JokesBox 
            setup ="I got my daughter a fridge for her birthday."
            punchline = "I can't wait to see her face light up when she opens it."
            ratings = {5}
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author: "GK", body: "This is Osm", title: "Great"}]}
        />
        <JokesBox 
            setup ="How did the hacker escape the police?"
            punchline = "He just ransomware!"
            ratings = {4}
        />
        <JokesBox 
            setup ="Why don't pirates travel on mountain roads?"
            punchline = "Scurvy."
            ratings = {5}
        />
        <JokesBox 
            setup ="Why do bees stay in the hive in the winter?"
            punchline = "Swarm."
            ratings = {0}
        />
        <JokesBox
            setup ="What's the best thing about Switzerland?"
            punchline = "I don't know, but the flag is a big plus!"
            ratings = {1}
        />

      </div>


    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
