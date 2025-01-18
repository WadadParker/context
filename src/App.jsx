import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

function App() {
  const[count,setCount] = useState(0);
  
  return (
      <div className="flex justify-center items-start p-40 bg-black h-screen space-x-20">
        <CountContext.Provider value={{count,setCount}}>
          <Sidebar />
          <Title />
        </CountContext.Provider>
      </div>
  )
}

export default App
