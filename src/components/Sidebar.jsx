import {useContext } from "react"
import { CountContext } from "../App"

const DisplayCount = () => {  
  const {count} = useContext(CountContext);
    return (
        <p className="text-3xl mt-10">Count: <span className="text-violet-500">{count}</span></p>
    )
}

const ResetCount = () => {
  const {setCount} = useContext(CountContext);
    return (
        <button className="border py-1 px-4 text-2xl rounded-md border-red-400 text-red-400 hover:cursor-pointer" onClick={()=>setCount(0)}>Reset</button>
    )
}


const Sidebar = () => {
  'use no memo'
    return (
      <div className="w-40 border border-violet-500 pb-4 text-white rounded-lg mx-1 my-2 space-y-4 text-center">
        <DisplayCount />
        <ResetCount />
      </div>
    )
  }
  
  export default Sidebar