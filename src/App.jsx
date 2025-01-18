import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count,setCount] = useState(0);
  return (
      <CountContext.Provider value={{count,setCount}}>
        {children}
      </CountContext.Provider>
  )
}

function App() {
  
  return (
      <div className="flex justify-center items-start p-40 bg-black h-screen space-x-20">
        <h1 className="text-4xl absolute text-white top-10">This heading does not rerender</h1>
        <CountProvider>
          <Sidebar />
          <Title />
        </CountProvider>
      </div>
  )
}

export default App
