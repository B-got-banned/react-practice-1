import React, {useState} from 'react'
import heart from'../assets/heart.png'

const Form = () => {
  const [emailMsg, setEmailMsg] = useState("")
  const [passMsg, setPassMsg] = useState("")
  const [valMsg, setValMsg] = useState("")

  const giveEmailMsg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?=.{1,255}$)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/
    const emailInput = event.target.value
    const emailCheck = new RegExp(emailPattern).exec(emailInput)
    if (emailInput && emailCheck === null) setEmailMsg("Email is invalid :(")
    else setEmailMsg("")
  }

  const givePassMsg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordStandard = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*()'"\x60_=?{|}<>;+:~,\x5b\x5d\x2f\x5c-]).{8,}$/
    const passInput = event.target.value
    const passCheck = new RegExp(passwordStandard).exec(passInput)
    if(passInput && passCheck === null) setPassMsg("Password must contain an uppercase letter, a lowercase letter, a number, a special character and must be at least 8 characters long.")
    else setPassMsg("")
  }

  const giveValidityMsg = () => {
    const emailInput = document.querySelector<HTMLInputElement>('#email')
    const passInput = document.querySelector<HTMLInputElement>('#password')
  
    if(!emailMsg && !passMsg){
      if(emailInput?.value && passInput?.value){
        setValMsg("You're good to go :)")
      }
      else{
        setValMsg("Both email and password must be provided")
      }
    }
    else setValMsg("Both email and password must be valid")
  }

  return(
    <div className='flex flex-col m-auto w-max p-10 pb-6 mt-3 rounded-2xl shadow-plumish shadow-[1px_0_45px]/70 '>
      <img src={heart} alt="heart" className='size-25 m-auto'/>
      <p className='text-center text-lg drop-shadow-[1px_0_8px]/50 drop-shadow-white font-bold'>Check your credentials :D</p>
      <br />
      <label htmlFor="email" className='font-bold'>Email</label>
      <input type="text" name='email' id='email' className='border rounded-md text-pink-50 p-1 pl-2 w-60 shadow-pink-100 shadow-[1px_0_12px]/20' placeholder='you@example.com' onChange={giveEmailMsg}/>
      <textarea readOnly value={emailMsg} className='text-pink-800 text-xs pt-1 cursor-default resize-none h-12 outline-none'/>
      
      <label htmlFor="password" className='font-bold'>Password</label>
      <input type="text" name='password' id='password' className='border rounded-md text-pink-50 p-1 pl-2 w-60 shadow-pink-100 shadow-[1px_0_12px]/20' placeholder='exampleP@55w_rd' onChange={givePassMsg}/>
      <textarea readOnly value={passMsg} className='text-pink-800 text-xs pt-1 h-17 cursor-default resize-none outline-none'/>
    
      <button type='submit' className='bg-plumish w-30 m-auto p-1.5 mb-2 rounded-sm active:bg-pink-950' onClick={giveValidityMsg}>Check Validity</button>
      <textarea readOnly value={valMsg} className='text-xs cursor-default resize-none outline-none h-8 text-center font-extrabold' id='message'/>
      
    </div>
  )
}

export default Form