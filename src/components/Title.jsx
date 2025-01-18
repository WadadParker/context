import { useContext } from "react"
import { CountContext } from "../App"

const AddButton = () => {
    const {setCount} = useContext(CountContext);
    return <button className="text-lg border rounded-lg text-green-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev + 1)}>Add</button>
}

const SubtractButton = () => {
    const {setCount} = useContext(CountContext);
    return <button className="text-lg border rounded-lg text-blue-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev - 1)}>Subtract</button>
}

const ButtonContainer = () => {

    return (
        <div className="flex w-28 h-20 items-center gap-x-4">
            <AddButton />
            <SubtractButton  />
        </div>
    )
}

const Heading = () => {
    const {title} = useContext(CountContext);
    return <h1 className="text-6xl text-red-400">With Context</h1>
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