import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count,setCount] = useState(0);
  return (
      <CountContext.Provider value={{count,setCount}}>
        <div className="border border-blue-400 space-x-20 flex p-2">
        {children}
        </div>
      </CountContext.Provider>
  )
}

function App() {
  
  return (
      <div className="flex justify-center items-start p-40 bg-black h-screen ">
        <h1 className="text-4xl absolute text-white top-10">ContextProvider is also a Component which rerenders</h1>
        <CountProvider>
          <Sidebar />
          <Title />
        </CountProvider>
      </div>
  )
}

export default App
