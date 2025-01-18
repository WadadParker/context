
const DisplayCount = ({count}) => {
    return (
        <p className="text-3xl mt-10">Count: {count}</p>
    )
}

const ResetCount = ({setCount}) => {
    return (
        <button className="border py-1 px-4 text-2xl rounded-md border-red-700 text-red-700 hover:cursor-pointer" onClick={()=>setCount(0)}>Reset</button>
    )
}


const Sidebar = ({count,setCount}) => {
    return (
      <div className="w-40 bg-slate-200 rounded-lg mx-1 my-2 space-y-4 text-center">
        <DisplayCount count={count}/>
        <ResetCount setCount={setCount}/>
      </div>
    )
  }
  
  export default Sidebar