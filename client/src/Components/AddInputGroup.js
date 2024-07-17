import { Button, Form, InputGroup } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { URLS } from "../constants/index";
import { useApiContext } from '../contexts';

function AddInputGroup({
  label,
  palceholder,
  button,
  url,
  taskId}) {
const[title,setTitle]=useState({})
  const {error,create}=useApiContext();

const handleSubmit=async()=>{

const  payload= title;
if (taskId) payload.todo = taskId;
await create({url,payload})
setTitle({})
 }


if (error) return<>{JSON.stringify(error)}</>

  return (
    <> 
          <InputGroup className="mb-3">
         <InputGroup.Text>{label||"Label"}</InputGroup.Text>
            <Form.Control id='todoInput'  placeholder={palceholder||"Placeholder"}
            onChange={(event)=>{
              setTitle((title)=>{
               return{...title,title: event.target.value}
              })
            }} />
              <Button variant="outline-secondary"   onClick={handleSubmit} >
                {button||"button Name"}</Button>
             </InputGroup>
  </>
  )
}

export default AddInputGroup