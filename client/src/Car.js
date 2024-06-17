import React from 'react'

export default function car(props) {
   
    const shoot = ()=>{
        const name= document.getElementById("test").value
        alert(`Goal......by ${name}`)
    }
  return (
    <div>

     Car is of {props.color} color and it has {props.wheels} wheels
   <br/>
   <input id= "test" name="text" type="text" />
   <button onClick={shoot}>shoot me </button>
    </div>
  )
}
