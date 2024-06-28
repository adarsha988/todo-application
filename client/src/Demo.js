import { useState } from "react"

const Demo =()=>{
      const [car,setCar]=useState({
        name:"jaguar",
        model:2020,
        wheel:5
    });
     const [cars,setCars]=useState([{
        name:"jag",
        model:2120,
        wheel:5
    },
     {
        name:"uar",
        model:2020,
        wheel:5
    },
  ]);
const handleClick=(model,name)=>{
    setCar((car)=>{
        return{...car,name :name,model:model }
 } );
}
 const handleArrayClick = ()=>{
  const name="fesla"
  const index=1;
  const model= 2010;
   const newArr= [...cars] ;
   
 newArr[index]={...newArr[index],model,name}
    console.log(newArr)
    setCars(newArr)
  

}
    return <> i have {car.name} of model {car.model}!
    <br/>
    <input type="text" placeholder="model" id="model"/>
    <input type="text" placeholder="name" id="name"/>
  <button  onClick={()=>{handleClick(
    document.getElementById("model").value,
    document.getElementById("name").value
  )}}>
    Change me </button>
    <button  onClick={handleArrayClick}>
    Change Array </button>
    </>
};
export default Demo