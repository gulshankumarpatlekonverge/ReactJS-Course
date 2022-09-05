import HeaderComponent from './header/header';
import InputboxButtonComponent from './body/inputboxButton';

// challenges/tasks
import EventListenerComponent from './challenges/eventListener';
import UseStateComponent from './challenges/useState';
import TernaryOperatorComponenet from './challenges/ternaryOperator';
import ComplexStateObject from './challenges/complexStateObject';
import BoxesPart from './challenges/Boxes Challenges/boxesPart';

import JokesData from './challenges/Jokes/JokesData';
import JokesComponent from './challenges/Jokes/jokesComponent'
import './App.css'

function App() {
  const jokeElements = JokesData.map(joke => {
    return (
        <JokesComponent 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
  return (
    <>
      {/* <HeaderComponent />
      <InputboxButtonComponent /> */}

      {/* challenges/tasks */}
      {/* <EventListenerComponent /> */}
      {/* <UseStateComponent /> */}
      {/* <TernaryOperatorComponenet /> */}
      {/* <ComplexStateObject /> */}
      <BoxesPart />
      
      {jokeElements}
    </>
  )
}

export default App
