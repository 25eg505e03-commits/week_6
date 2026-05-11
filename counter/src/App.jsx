import { useState } from 'react'
import {contextObj} from './context/ContextProvider'
import { useContext } from 'react'
import './App.css'
function App() {
 const {counter,incrementcounter,decrementcounter}=useContext(contextObj)

  return (
    <div className='mt-30 grid lg:grid-cols-2 gap-2'>
    <div className=' mx-auto p-0 bg-'>
      <h1 className='text-center'>Edit Counter 1</h1>                                                         
      <p>{counter}</p>
      <button onClick={incrementcounter} className='bg-amber-400 w-20 p-2 gap-2'>+</button>
      <button onClick={decrementcounter} className='bg-amber-400 w-20 p-2'>-</button>
    </div>
    <div className=' mx-auto '>
      <h1 className='text-center'>Edit Counter 1</h1>
      <p>{counter}</p>
      <button onClick={incrementcounter} className='bg-amber-400 w-20 p-2 gap-2'>+</button>
      <button onClick={decrementcounter} className='bg-amber-400 w-20 p-2'>-</button>
    </div>
    <div className=' mx-auto '>
      <h1 className='text-center'>Edit Counter 1</h1>
      <p>{counter}</p>
      <button onClick={incrementcounter} className='bg-amber-400 w-20 p-2'>+</button>
      <button onClick={decrementcounter} className='bg-amber-400 w-20 p-2 gap-2'>-</button>
    </div>
    <div className=' mx-auto '>
      <h1 className='text-center'>Edit Counter 1</h1>
      <p>{counter}</p>
      <button onClick={incrementcounter} className='bg-amber-400 w-20 p-2 gap-2'>+</button>
      <button onClick={decrementcounter} className='bg-amber-400 w-20 p-2 '>-</button>
    </div>
    </div>
  )
}

export default App