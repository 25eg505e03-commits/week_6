// import context tools
import { createContext,useState } from 'react'

// create context
export const counterContextObj = createContext()

// context provider component
function ContextProvider({children}) {
    // manage counter states
    const [counter,setCounter] = useState(10)
    const [counter1,setCounter1] = useState(20)
    // update counter
    const changeCounter = ()=>{
        setCounter(counter+1)
    }

    // update second counter
    const changeCounter1 = () =>{
      setCounter1(counter1 + 1)
    }
  // provide context to children
  return (
   < counterContextObj.Provider value = {{counter,counter1,changeCounter,changeCounter1}}>
    {children}

   </counterContextObj.Provider>

  )
}

export default ContextProvider