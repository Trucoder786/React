import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"Red"}}
           onClick={()=> setColor("Red")}>
            Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"green"}}  
          onClick={()=>{setColor("green")}}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"Blue"}}
          onClick={()=>{setColor("blue")}}>Blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"black"}}
          onClick={()=>{setColor("black")}}>black</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"grey"}}
          onClick={()=>{setColor("grey")}}>grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"orange"}}
          onClick={()=>{setColor("orange")}}>orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background:"Lavender"}}
          onClick={()=>{setColor("Lavender")}}>lavender</button>

        </div>

      </div>
    </div>
  ) 
}

export default App
