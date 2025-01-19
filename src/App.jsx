import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count,setCount] = useState(0);
  const [title,setTitle] = useState("Consuming Context")
  return (
      <CountContext.Provider value={{count,setCount,title}}>
        {children}
      </CountContext.Provider>
  )
}

function App() {
  
  return (
      <div className="flex justify-center items-start py-40 space-x-10 bg-black h-screen ">
        <h1 className="text-4xl absolute text-white top-10">Rerender without Change</h1>
        <CountProvider>
          <Sidebar />
          <Title />
        </CountProvider>
      </div>
  )
}

export default App
