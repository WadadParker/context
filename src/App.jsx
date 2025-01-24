import { createContext, useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

export const CountContext = createContext();
export const TitleContext = createContext();

export const TitleProvider = ({children}) => {
  const [title,setTitle] = useState("Consuming Context")

  return (
    <TitleContext value={{title}}>
        {children}
      </TitleContext>
  )
}

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
