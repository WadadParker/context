import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count,setCount] = useState(0);
  return (
      <CountContext value={{count,setCount}}>
        {children}
      </CountContext>
  )
}

function App() {
  
  return (
      <div className="flex justify-center items-start py-28 space-x-10 bg-black h-screen">
        <h1 className="text-4xl absolute ml-10 top-5">This heading does not rerender</h1>
        <CountProvider>
          <Sidebar />
          <Title />
        </CountProvider>
      </div>
  )
}

export default App
