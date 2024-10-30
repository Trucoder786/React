import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("")

  // Using RefHook
  const passwordRef = useRef(null)

  // Password Generator Method with call back function
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(characterAllowed) str+= "!@#$%^&*()[]{}"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length,numberAllowed,characterAllowed,setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto text-2xl shadow-md rounded-lg px-4 my-10  text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-4 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password} 
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
           />
           <button onClick={copyPassToClip}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
        </div>
        <div className=' flex text-lg gap-x-2 py-4 '>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={8}
             max={128}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>length({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkBox"
              defaultChecked = {numberAllowed}
              id='numberInput'
             className='cursor-pointer'
             onChange={()=>{
              numberAllowed((prev)=>!prev)
             }}
              />
              <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkBox"
              defaultChecked = {characterAllowed}
              id='characterInput'
             className='cursor-pointer'
             onChange={()=>{
              setCharacterAllowed((prev)=>!prev)
             }}
              />
              <label htmlFor='characterInput'>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
