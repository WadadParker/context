import {  useContext } from "react"
import { CountContext , TitleContext , TitleProvider } from "../App"

const AddButton = () => {
    const {setCount} = useContext(CountContext);
    return (<button className="text-lg border rounded-lg text-green-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev+1)}>Add</button>)
}

const SubtractButton = () => {
    const {setCount} = useContext(CountContext);
    return (<button className="text-lg border rounded-lg text-blue-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev-1)}>Subtract</button>)
}

const ButtonContainer = () => {
    return (
        <div className="flex  h-20 items-center gap-x-4 pl-4 border border-red-300">
            <AddButton />
            <SubtractButton />
        </div>
    )
}

const Heading = () => {
    const {title} = useContext(TitleContext);
    return (<h1 className="text-6xl text-red-400">Context Consumer</h1>)
}

const Title = () => {
  return (
    <div className="flex flex-col space-y-4 p-2">
        <TitleProvider>
            <Heading />
        </TitleProvider>
        <ButtonContainer />
    </div>
  )
}

export default Title