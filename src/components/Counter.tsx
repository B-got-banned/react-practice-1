import { useState } from "react"

function Counter(){
  const [counter, setCounter] = useState(0)

  function decrease(){
    setCounter(counter - 1)
  }
  function increase(){
    setCounter(counter + 1)
  }
  return(
    <div className="text-center pt-10">
      <h1 className="text-3xl font-bold">{counter}</h1>
      <div className="flex space-x-6 justify-center">
        <button className="bg-pink-200 w-10 text-2xl-center font-bold rounded-xs active:bg-pink-300" onClick={increase} type="button">+</button>
        <button className="bg-gray-200 w-10 text-2xl-center font-bold rounded-xs active:bg-gray-300" onClick={decrease} type="button">-</button>
      </div>
    </div>
  )
}

export default Counter