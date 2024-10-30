import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name:"Divyanshu",
    age: 21
  }
  let newArray = [1,2,34]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg'>Tailwind Test</h1>
      <Card subName="Chai aur code" btnText="Click Here"/>
      <Card subName="physics"/>
    </>
  )
}

export default App
