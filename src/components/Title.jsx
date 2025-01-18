
const AddButton = ({setCount}) => {
    return <button className="text-lg border rounded-lg text-red-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev + 1)}>Add</button>
}

const SubtractButton = ({setCount}) => {
    return <button className="text-lg border rounded-lg text-red-400 px-6 py-2 transition-all ease-linear focus:translate-y-[1px]" onClick={()=>setCount(prev=>prev - 1)}>Subtract</button>
}

const ButtonContainer = ({setCount}) => {
    return (
        <div className="flex w-28 h-20 items-center gap-x-4">
            <AddButton setCount={setCount}/>
            <SubtractButton setCount={setCount} />
        </div>
    )
}

const Heading = () => {
    return <h1 className="text-6xl text-red-400">Prop Drilling</h1>
}

const Title = ({setCount}) => {
  return (
    <div className="flex flex-col space-y-4">
    <Heading />
    <ButtonContainer setCount={setCount}/>
    </div>
  )
}

export default Title