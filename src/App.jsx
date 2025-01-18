import { useState } from "react"

import Sidebar from "./components/Sidebar"
import Title from "./components/Title";

function App() {
  const[count,setCount] = useState(0);

  return (
      <div className="flex justify-center items-start p-40 bg-black h-screen space-x-20">
        <Sidebar count={count} setCount={setCount}/>
        <Title setCount={setCount}/>
      </div>
  )
}

export default App
