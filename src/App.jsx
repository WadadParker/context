import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = () => {
  const [count,setCount] = useState(0);
  "use no memo"
  return (
      <CountContext value={{count,setCount}}>
        <div className="flex space-x-10 p-2">
        <Sidebar />
        <Title />
        </div>
      </CountContext>
  )
}

function App() {
  "use no memo"
  
  return (
      <div className="flex justify-center items-start py-28 space-x-10 bg-black h-screen">
        <h1 className="text-4xl absolute ml-10 top-5">This heading does not rerender</h1>
        <CountProvider />
      </div>
  )
}

export default App
