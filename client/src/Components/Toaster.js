import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toaster() {
    const [show,setShow]= useState();
    const [position, setPosition] = useState('bottom-end');

  return (
    <>
    

  
      <ToastContainer
        className="p-3"
        position={position}
        style={{ zIndex: 1 }}
      >
        <Toast onClose={()=>{setShow(false)} }show={show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
         
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
   
  </>
);
  
}

export default Toaster