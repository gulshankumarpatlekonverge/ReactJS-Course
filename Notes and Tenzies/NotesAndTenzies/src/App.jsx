import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DarkAndLightMode from './DarkAndLightMode/DarkAndLightMode';
import NotesApp from './Notes App/notesApp';
import TenziesApp from './Tenzies App/TenziesApp';
import './App.css'

function App() {
  return (
    <div>
      {/* <DarkAndLightMode /> */}
      {/* <NotesApp />  */}
      <TenziesApp />
    </div>
  )
}

export default App
