import React, { useRef } from 'react'

export default function FormComponent() {
    const FormRef=useRef(null);
   
    const handleClick=(e)=>{
        e.preventDefault();
        const {email,password}=FormRef.current
console.log({email:email.value,password:password.value})
FormRef.current.reset();


    }
 
  return (
    <div>
    <form ref={FormRef} >
    <input name="email" 
    placeholder='email' />

    <input name="password" placeholder='password'
   />
    <button onClick={(e)=>handleClick(e)}>Submit</button>
    </form>
    </div>
  )
}
