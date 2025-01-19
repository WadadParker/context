import { use } from "react"
import { CountContext } from "../App"

const AddButton = ({setCount}) => {
    return (<button className="text-lg border rounded-lg text-green-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev+1)}>Add</button>)
}

const SubtractButton = ({setCount}) => {
    return (<button className="text-lg border rounded-lg text-blue-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev-1)}>Subtract</button>)
}

const ButtonContainer = () => {
    const {count,setCount} = use(CountContext);
    return (
        <div className="flex  h-20 items-center gap-x-4 pl-4 border border-red-300">
            <h1 className="hidden">{count}</h1>
            <AddButton setCount={setCount} />
            <SubtractButton setCount={setCount} />
        </div>
    )
}

const Heading = () => {
    return (<h1 className="text-6xl text-red-400">With Compiler</h1>)
}

const Title = () => {
  return (
    <div className="flex flex-col space-y-4 p-2">
        <Heading />
        <ButtonContainer />
    </div>
  )
}

export default Title