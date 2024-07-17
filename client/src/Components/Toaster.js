import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toaster({showToaster,title,msg}) {
 
    const [show,setShow]= useState(showToaster);
   const [position, setPosition] = useState('bottom-end');
    useEffect(()=>{
      setShow(showToaster)
    },[showToaster])
   
  return (
    <>
    

  
      <ToastContainer
        className="p-3"
        position={position}
        style={{ zIndex: 1 }}
      >
        <Toast onClose={()=>{setShow(false)} }show={show} delay={2000} autohide>
          <Toast.Header closeButton={false}>
         
            <strong className="me-auto">{title||"Toast Header"}</strong>
          
          </Toast.Header>
          <Toast.Body>{msg||"Toast Body"}</Toast.Body>
        </Toast>
      </ToastContainer>
   
  </>
);
  
}

export default Toaster