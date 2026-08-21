import React, { useState } from "react"

function Tracker(){
  const [input, setInput] = useState('')

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) setInput(event.target.value)
  }
  return(
    <>
    <input type="text" placeholder="Enter some text :)" className="border rounded-xs" onChange={inputChange} size={30}/>
    <br />
    <input type="text" value={input} size={30}/>
    </>
  )
}

export default Tracker