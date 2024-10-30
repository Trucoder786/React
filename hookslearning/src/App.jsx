import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 10
  const addValue = ()=>{
    if(counter<20){
      setCounter(counter+1)
    }
  }

  function decValue(){
    if(counter!==0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>couter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button><br />
      <button onClick={decValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
