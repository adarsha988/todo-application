// import "./App.css"
import{Container,Row} from 'react-bootstrap'
import Todo from './Pages/Todo';
import Toaster from "./Components/Toaster"
import { useToastContext } from "./contexts/ToastContext";
import React from 'react';
import FormComponent from './form';
import Dropdown from"./DropDown"

function App() {
  const {toast}=useToastContext();
 
  
  return ( 
    <>
    
    
   
 <Container>
     <Row className='text-center'> 
      
        <Todo/> 
    </Row>
  </Container>
 <Toaster showToaster={toast?.show} msg={toast?.msg} title={toast?.title}/>
</>
  )
}

export default App;
