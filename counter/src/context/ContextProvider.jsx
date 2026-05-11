import React from "react";
import { createContext,useState} from "react";
export const contextObj=createContext()

function ContextProvider({children}) {
    const [counter, setCounter]=useState(0)
    const incrementcounter=()=>{
        setCounter(counter+1)
    }
    const decrementcounter=()=>{
        setCounter(counter-1)
    }
  return (
    <div>
      <contextObj.Provider value={{counter, incrementcounter, decrementcounter}}>
        {children}
      </contextObj.Provider>
    </div>
  )
}

export default ContextProvider