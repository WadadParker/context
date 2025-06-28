import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count,setCount] = useState(0);
  
  return (
      <CountContext value={{count,setCount}}>
        <div className="flex p-2 space-x-20 border border-blue-500">
        {children}
        </div>
      </CountContext>
  )
}

function App() {
  
  return (
      <div className="flex justify-center items-start py-24 space-x-10 bg-black h-screen">
        <h1 className="text-4xl absolute ml-10 top-10"></h1>
        <CountProvider>
          <Sidebar />
          <Title />
        </CountProvider>
      </div>
  )
}

export default App
